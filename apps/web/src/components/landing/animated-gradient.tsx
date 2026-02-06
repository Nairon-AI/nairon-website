import { useEffect, useRef } from "react";

/**
 * Animated gradient background — uses the same WebGL shader as Framer's
 * "Animated Gradient Background" component with these settings:
 *
 * Color 1: #192613, Color 2: #22DB18, Color 3: White
 * Speed: 53, Swirl: 31, Scale: 0.45, Softness: 100
 * Proportion: 28, Shape: Checks, Shape Size: 10
 * Distortion: 0, Rotation: 0, Iterations: 10
 */

const VERTEX_SHADER = `#version 300 es
layout(location = 0) in vec4 a_position;
void main() {
  gl_Position = a_position;
}
`;

const FRAGMENT_SHADER = `#version 300 es
precision highp float;

uniform float u_time;
uniform float u_pixelRatio;
uniform vec2 u_resolution;

uniform float u_scale;
uniform float u_rotation;
uniform vec4 u_color1;
uniform vec4 u_color2;
uniform vec4 u_color3;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;

out vec4 fragColor;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

vec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {
    vec3 color1 = c1.rgb * c1.a;
    vec3 color2 = c2.rgb * c2.a;
    vec3 color3 = c3.rgb * c3.a;

    float r1 = smoothstep(.0 + .35 * edgesWidth, .7 - .35 * edgesWidth + .5 * edge_blur, mixer);
    float r2 = smoothstep(.3 + .35 * edgesWidth, 1. - .35 * edgesWidth + edge_blur, mixer);

    vec3 blended_color_2 = mix(color1, color2, r1);
    float blended_opacity_2 = mix(c1.a, c2.a, r1);

    vec3 c = mix(blended_color_2, color3, r2);
    float o = mix(blended_opacity_2, c3.a, r2);
    return vec4(c, o);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    float t = .5 * u_time;

    float noise_scale = .0005 + .006 * u_scale;

    uv -= .5;
    uv *= (noise_scale * u_resolution);
    uv = rotate(uv, u_rotation * .5 * PI);
    uv /= u_pixelRatio;
    uv += .5;

    float n1 = noise(uv * 1. + t);
    float n2 = noise(uv * 2. - t);
    float angle = n1 * TWO_PI;
    uv.x += 4. * u_distortion * n2 * cos(angle);
    uv.y += 4. * u_distortion * n2 * sin(angle);

    float iterations_number = ceil(clamp(u_swirlIterations, 1., 30.));
    for (float i = 1.; i <= 30.; i++) {
        if (i > iterations_number) break;
        uv.x += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1.5 * uv.y);
        uv.y += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1. * uv.x);
    }

    float proportion = clamp(u_proportion, 0., 1.);

    float shape = 0.;
    float mixer = 0.;
    if (u_shape < .5) {
      vec2 checks_shape_uv = uv * (.5 + 3.5 * u_shapeScale);
      shape = .5 + .5 * sin(checks_shape_uv.x) * cos(checks_shape_uv.y);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else if (u_shape < 1.5) {
      vec2 stripes_shape_uv = uv * (.25 + 3. * u_shapeScale);
      float f = fract(stripes_shape_uv.y);
      shape = smoothstep(.0, .55, f) * smoothstep(1., .45, f);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else {
      float sh = 1. - uv.y;
      sh -= .5;
      sh /= (noise_scale * u_resolution.y);
      sh += .5;
      float shape_scaling = .2 * (1. - u_shapeScale);
      shape = smoothstep(.45 - shape_scaling, .55 + shape_scaling, sh + .3 * (proportion - .5));
      mixer = shape;
    }

    vec4 color_mix = blend_colors(u_color1, u_color2, u_color3, mixer, 1. - clamp(u_softness, 0., 1.), .01 + .01 * u_scale);

    fragColor = vec4(color_mix.rgb, color_mix.a);
}
`;

// Convert hex color to [r, g, b, a] normalized floats
function hexToVec4(hex: string): [number, number, number, number] {
	hex = hex.replace(/^#/, "");
	if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
	if (hex.length === 6) hex += "ff";
	return [
		Number.parseInt(hex.slice(0, 2), 16) / 255,
		Number.parseInt(hex.slice(2, 4), 16) / 255,
		Number.parseInt(hex.slice(4, 6), 16) / 255,
		Number.parseInt(hex.slice(6, 8), 16) / 255,
	];
}

// Framer settings mapped to shader uniforms
const PARAMS_GREEN = {
	scale: 0.45,
	rotation: 0,
	speed: 53,
	color1: hexToVec4("192613"),
	color2: hexToVec4("22DB18"),
	color3: hexToVec4("FFFFFF"),
	proportion: 0.28,
	softness: 1.0,
	distortion: 0,
	swirl: 0.31,
	swirlIterations: 10,
	shapeScale: 0.1,
	shape: 0, // Checks = 0
};

const PARAMS_GOLD = {
	scale: 0.45,
	rotation: 0,
	speed: 53,
	color1: hexToVec4("1A1609"),
	color2: hexToVec4("FFB300"),
	color3: hexToVec4("FFFFFF"),
	proportion: 0.28,
	softness: 1.0,
	distortion: 0,
	swirl: 0.31,
	swirlIterations: 10,
	shapeScale: 0.1,
	shape: 0, // Checks = 0
};

function createShader(gl: WebGL2RenderingContext, type: number, source: string) {
	const shader = gl.createShader(type);
	if (!shader) return null;
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.error("Shader compile error:", gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}
	return shader;
}

function createProgram(gl: WebGL2RenderingContext, vs: WebGLShader, fs: WebGLShader) {
	const program = gl.createProgram();
	if (!program) return null;
	gl.attachShader(program, vs);
	gl.attachShader(program, fs);
	gl.linkProgram(program);
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		console.error("Program link error:", gl.getProgramInfoLog(program));
		gl.deleteProgram(program);
		return null;
	}
	return program;
}

export function AnimatedGradient({ variant = "green" }: { variant?: "green" | "gold" }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const PARAMS = variant === "gold" ? PARAMS_GOLD : PARAMS_GREEN;

		const gl = canvas.getContext("webgl2", { premultipliedAlpha: true, alpha: true });
		if (!gl) return;

		const vs = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
		const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
		if (!vs || !fs) return;

		const program = createProgram(gl, vs, fs);
		if (!program) return;

		// Full-screen quad
		const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

		const posLoc = gl.getAttribLocation(program, "a_position");
		gl.enableVertexAttribArray(posLoc);
		gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

		// Cache uniform locations
		gl.useProgram(program);
		const uniforms = {
			u_time: gl.getUniformLocation(program, "u_time"),
			u_pixelRatio: gl.getUniformLocation(program, "u_pixelRatio"),
			u_resolution: gl.getUniformLocation(program, "u_resolution"),
			u_scale: gl.getUniformLocation(program, "u_scale"),
			u_rotation: gl.getUniformLocation(program, "u_rotation"),
			u_color1: gl.getUniformLocation(program, "u_color1"),
			u_color2: gl.getUniformLocation(program, "u_color2"),
			u_color3: gl.getUniformLocation(program, "u_color3"),
			u_proportion: gl.getUniformLocation(program, "u_proportion"),
			u_softness: gl.getUniformLocation(program, "u_softness"),
			u_shape: gl.getUniformLocation(program, "u_shape"),
			u_shapeScale: gl.getUniformLocation(program, "u_shapeScale"),
			u_distortion: gl.getUniformLocation(program, "u_distortion"),
			u_swirl: gl.getUniformLocation(program, "u_swirl"),
			u_swirlIterations: gl.getUniformLocation(program, "u_swirlIterations"),
		};

		// Set static uniforms
		gl.uniform1f(uniforms.u_scale, PARAMS.scale);
		gl.uniform1f(uniforms.u_rotation, PARAMS.rotation);
		gl.uniform4fv(uniforms.u_color1, PARAMS.color1);
		gl.uniform4fv(uniforms.u_color2, PARAMS.color2);
		gl.uniform4fv(uniforms.u_color3, PARAMS.color3);
		gl.uniform1f(uniforms.u_proportion, PARAMS.proportion);
		gl.uniform1f(uniforms.u_softness, PARAMS.softness);
		gl.uniform1f(uniforms.u_shape, PARAMS.shape);
		gl.uniform1f(uniforms.u_shapeScale, PARAMS.shapeScale);
		gl.uniform1f(uniforms.u_distortion, PARAMS.distortion);
		gl.uniform1f(uniforms.u_swirl, PARAMS.swirl);
		gl.uniform1f(uniforms.u_swirlIterations, PARAMS.swirlIterations);

		let animationId: number;
		const startTime = performance.now();
		// Speed factor: Framer speed 53 → map to a reasonable time multiplier
		// Default speed is 20 with multiplier ~1.0. Speed 53 ≈ 2.65x
		const speedMultiplier = PARAMS.speed / 20;

		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			const dpr = window.devicePixelRatio || 1;
			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;
			gl.viewport(0, 0, canvas.width, canvas.height);
			gl.uniform1f(uniforms.u_pixelRatio, dpr);
			gl.uniform2f(uniforms.u_resolution, canvas.width, canvas.height);
		};

		resize();
		window.addEventListener("resize", resize);

		function render() {
			if (!gl) return;
			const elapsed = (performance.now() - startTime) / 1000;
			gl.uniform1f(uniforms.u_time, elapsed * speedMultiplier);
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
			animationId = requestAnimationFrame(render);
		}

		render();

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener("resize", resize);
			gl.deleteProgram(program);
			gl.deleteShader(vs);
			gl.deleteShader(fs);
			gl.deleteBuffer(buffer);
		};
	}, [variant]);

	return (
		<>
			<canvas
				ref={canvasRef}
				className="absolute inset-0 w-full h-full"
				style={{ imageRendering: "auto" }}
			/>
			{/* Checks pattern overlay — same asset used by Framer */}
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")',
					backgroundSize: "200px",
					backgroundRepeat: "repeat",
					opacity: 0.25,
				}}
			/>
		</>
	);
}

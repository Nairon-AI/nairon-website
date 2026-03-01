import { useEffect, useMemo, useRef, useState } from "react";
import type { ComponentType } from "react";
import { MessageSquare, Wrench, CheckCircle2, Sparkles } from "lucide-react";
import { createTimeline, utils } from "animejs";
import type { Timeline, JSAnimation } from "animejs";

type CommandStep = {
	label: string;
	detail: string;
};

type DiagramNode = {
	id: string;
	x: number;
	y: number;
	label?: string;
	size?: "sm" | "md" | "lg";
	render?: "node" | "dot" | "anchor";
	labelSide?: "top" | "right" | "bottom" | "left";
	accent?: "success";
};

type DiagramConnection = {
	from: string;
	to: string;
	dashed?: boolean;
	route?: "orthogonal" | "direct";
	label?: string;
	labelX?: number;
	labelY?: number;
};

type CommandItem = {
	number: string;
	title: string;
	description: string;
	command: string;
	icon: ComponentType<{ className?: string }>;
	color: string;
	scenarioTitle: string;
	scenarioSubtitle: string;
	scenarioSteps: CommandStep[];
	nodes: DiagramNode[];
	connections: DiagramConnection[];
};

const commands: CommandItem[] = [
	{
		number: "1",
		title: "Scope",
		description: "Clarify requirements before code starts.",
		command: "/flux:scope Add user notifications",
		icon: MessageSquare,
		color: "text-blue-400",
		scenarioTitle: "Requirement discovery flow",
		scenarioSubtitle: "Runs a full double-diamond for complex features, or a fast default path for small changes.",
		scenarioSteps: [
			{ label: "Discover", detail: "Explore constraints, context, and unknowns" },
			{ label: "Define", detail: "Converge to a precise problem statement" },
			{ label: "Develop", detail: "Expand solution options as needed" },
			{ label: "Deliver", detail: "Converge to an execution-ready brief (deep or fast path)" },
		],
		nodes: [
			{ id: "discover", x: 72, y: 100, label: "Discover", render: "dot", labelSide: "bottom" },
			{ id: "problem-top", x: 170, y: 28, render: "anchor" },
			{ id: "define", x: 268, y: 100, label: "Define", render: "dot", labelSide: "bottom" },
			{ id: "problem-bottom", x: 170, y: 172, render: "anchor" },
			{ id: "develop", x: 392, y: 100, label: "Develop", render: "dot", labelSide: "bottom" },
			{ id: "solution-top", x: 490, y: 28, render: "anchor" },
			{ id: "deliver", x: 588, y: 100, label: "Deliver", render: "dot", labelSide: "right", accent: "success" },
			{ id: "solution-bottom", x: 490, y: 172, render: "anchor" },
		],
		connections: [
			{ from: "discover", to: "problem-top", route: "direct" },
			{ from: "problem-top", to: "define", route: "direct" },
			{ from: "discover", to: "problem-bottom", route: "direct" },
			{ from: "problem-bottom", to: "define", route: "direct" },
			{ from: "define", to: "develop", dashed: true, route: "direct" },
			{ from: "develop", to: "solution-top", route: "direct" },
			{ from: "solution-top", to: "deliver", route: "direct" },
			{ from: "develop", to: "solution-bottom", route: "direct" },
			{ from: "solution-bottom", to: "deliver", route: "direct" },
		],
	},
	{
		number: "2",
		title: "Work",
		description: "Execute with a heartbeat loop: verify, diagnose why it failed, adapt, retry, then commit.",
		command: "/flux:work fn-1.1",
		icon: Wrench,
		color: "text-amber-400",
		scenarioTitle: "Execution flow",
		scenarioSubtitle: "State-machine loop: pass commits forward; fail drops to why-fix-rerun then re-verify.",
		scenarioSteps: [
			{ label: "Implement", detail: "Ship a small reversible code change" },
			{ label: "Verify", detail: "Checks emit a pass or fail signal" },
			{ label: "Diagnose", detail: "Capture why failed, fix, and rerun checks" },
			{ label: "Commit", detail: "After a clean pass, finalize and close" },
		],
		nodes: [
			{ id: "task", x: 72, y: 100, label: "Task", size: "sm" },
			{ id: "impl", x: 188, y: 100, label: "Implement", size: "md" },
			{ id: "verify", x: 320, y: 100, label: "Verify", size: "md" },
			{ id: "commit", x: 468, y: 100, label: "Commit", size: "md" },
			{ id: "done", x: 596, y: 100, label: "Done", size: "sm" },
			{ id: "why", x: 320, y: 148, label: "Why failed?", size: "sm" },
			{ id: "adapt", x: 430, y: 148, label: "Fix", size: "sm" },
			{ id: "retry", x: 320, y: 178, label: "Re-run", size: "sm" },
		],
		connections: [
			{ from: "task", to: "impl" },
			{ from: "impl", to: "verify" },
			{ from: "verify", to: "commit", label: "pass", labelX: 392, labelY: 88 },
			{ from: "commit", to: "done" },
			{ from: "verify", to: "why", label: "fail", labelX: 334, labelY: 126 },
			{ from: "why", to: "adapt" },
			{ from: "adapt", to: "retry" },
			{ from: "retry", to: "verify" },
		],
	},
	{
		number: "3",
		title: "Review",
		description: "Catch defects before they compound.",
		command: "/flux:impl-review",
		icon: CheckCircle2,
		color: "text-emerald-400",
		scenarioTitle: "Review flow",
		scenarioSubtitle: "Stress-tests output before merge with external reviewer.",
		scenarioSteps: [
			{ label: "Inspect", detail: "Implementation checks against spec" },
			{ label: "Challenge", detail: "Adversarial pass probes weak spots" },
			{ label: "Validate", detail: "Quality gates pass or return feedback" },
			{ label: "Output", detail: "Merge-ready verdict with notes" },
		],
		nodes: [
			{ id: "submit", x: 68, y: 100, label: "Submit", size: "md" },
			{ id: "spec", x: 196, y: 56, label: "Spec", size: "sm" },
			{ id: "adversarial", x: 196, y: 144, label: "Stress", size: "sm" },
			{ id: "gate", x: 336, y: 100, label: "Gate", size: "lg" },
			{ id: "ship", x: 500, y: 48, label: "SHIP", size: "md" },
			{ id: "needs", x: 500, y: 100, label: "NEEDS", size: "sm" },
			{ id: "rethink", x: 500, y: 152, label: "RETHINK", size: "sm" },
			{ id: "patch", x: 610, y: 100, label: "Patch", size: "sm" },
		],
		connections: [
			{ from: "submit", to: "spec" },
			{ from: "submit", to: "adversarial" },
			{ from: "spec", to: "gate" },
			{ from: "adversarial", to: "gate" },
			{ from: "gate", to: "ship" },
			{ from: "gate", to: "needs" },
			{ from: "gate", to: "rethink" },
			{ from: "needs", to: "patch" },
			{ from: "rethink", to: "submit" },
			{ from: "patch", to: "submit" },
		],
	},
	{
		number: "4",
		title: "Improve",
		description: "Analyze sessions, then upgrade tooling.",
		command: "/flux:improve",
		icon: Sparkles,
		color: "text-cyan-400",
		scenarioTitle: "Improvement flow",
		scenarioSubtitle: "Converts friction into concrete upgrades based on session analysis.",
		scenarioSteps: [
			{ label: "Collect", detail: "Session traces and outcomes analyzed" },
			{ label: "Detect", detail: "Friction patterns scored by impact" },
			{ label: "Recommend", detail: "Best MCPs, skills, and process changes" },
			{ label: "Output", detail: "Actionable upgrade plan for next cycle" },
		],
		nodes: [
			{ id: "scan", x: 66, y: 100, label: "Scan", size: "md" },
			{ id: "sessions", x: 180, y: 52, label: "Sessions", size: "sm" },
			{ id: "metrics", x: 180, y: 100, label: "Metrics", size: "sm" },
			{ id: "env", x: 180, y: 148, label: "Env", size: "sm" },
			{ id: "detect", x: 314, y: 100, label: "Detect", size: "md" },
			{ id: "score", x: 430, y: 100, label: "Score", size: "md" },
			{ id: "recommend", x: 544, y: 66, label: "Recommend", size: "sm" },
			{ id: "install", x: 544, y: 136, label: "Install", size: "sm" },
			{ id: "baseline", x: 628, y: 100, label: "Baseline", size: "sm" },
		],
		connections: [
			{ from: "scan", to: "sessions" },
			{ from: "scan", to: "metrics" },
			{ from: "scan", to: "env" },
			{ from: "sessions", to: "detect" },
			{ from: "metrics", to: "detect" },
			{ from: "env", to: "detect" },
			{ from: "detect", to: "score" },
			{ from: "score", to: "recommend" },
			{ from: "recommend", to: "install" },
			{ from: "install", to: "baseline" },
			{ from: "baseline", to: "scan" },
		],
	},
];

type Animation = Timeline | JSAnimation;

// Circuit-style path calculation (right angles)
function calculatePath(from: DiagramNode, to: DiagramNode, _nodeMap: Map<string, DiagramNode>): string {
	const fromSize = from.render === "anchor" ? 0 : from.render === "dot" ? 7 : from.size === "lg" ? 28 : from.size === "sm" ? 16 : 22;
	const toSize = to.render === "anchor" ? 0 : to.render === "dot" ? 7 : to.size === "lg" ? 28 : to.size === "sm" ? 16 : 22;

	const dx = to.x - from.x;
	const dy = to.y - from.y;

	let startX = from.x;
	let startY = from.y;
	let endX = to.x;
	let endY = to.y;

	// Create circuit-like paths with right angles
	if (Math.abs(dx) > Math.abs(dy)) {
		startX = from.x + (dx > 0 ? fromSize : -fromSize);
		endX = to.x + (dx > 0 ? -toSize : toSize);
		const midX = from.x + dx / 2;
		return `M ${startX} ${startY} H ${midX} V ${endY} H ${endX}`;
	} else {
		startY = from.y + (dy > 0 ? fromSize : -fromSize);
		endY = to.y + (dy > 0 ? -toSize : toSize);
		const midY = from.y + dy / 2;
		return `M ${startX} ${startY} V ${midY} H ${endX} V ${endY}`;
	}
}

function calculateDirectPath(from: DiagramNode, to: DiagramNode): string {
	const fromSize = from.render === "anchor" ? 0 : from.render === "dot" ? 7 : from.size === "lg" ? 28 : from.size === "sm" ? 16 : 22;
	const toSize = to.render === "anchor" ? 0 : to.render === "dot" ? 7 : to.size === "lg" ? 28 : to.size === "sm" ? 16 : 22;

	const dx = to.x - from.x;
	const dy = to.y - from.y;
	const distance = Math.hypot(dx, dy) || 1;

	const ux = dx / distance;
	const uy = dy / distance;

	const startX = from.x + ux * fromSize;
	const startY = from.y + uy * fromSize;
	const endX = to.x - ux * toSize;
	const endY = to.y - uy * toSize;

	return `M ${startX} ${startY} L ${endX} ${endY}`;
}

function CircuitDiagram({ item }: { item: CommandItem }) {
	const rootRef = useRef<HTMLDivElement>(null);
	const animationsRef = useRef<Animation[]>([]);
	const [activeNodeIndex, setActiveNodeIndex] = useState(-1);

	const nodeMap = useMemo(() => new Map(item.nodes.map((n) => [n.id, n])), [item.nodes]);

	// Calculate paths
	const pathEntries = useMemo(() => {
		return item.connections.map((conn) => {
			const from = nodeMap.get(conn.from);
			const to = nodeMap.get(conn.to);
			if (!from || !to) {
				return { d: "", dashed: Boolean(conn.dashed), label: conn.label, labelX: conn.labelX, labelY: conn.labelY };
			}
			return {
				d: conn.route === "direct" ? calculateDirectPath(from, to) : calculatePath(from, to, nodeMap),
				dashed: Boolean(conn.dashed),
				label: conn.label,
				labelX: conn.labelX,
				labelY: conn.labelY,
			};
		});
	}, [item.connections, nodeMap]);

	useEffect(() => {
		if (!rootRef.current) return;
		const root = rootRef.current;

		const nodes = root.querySelectorAll<SVGGElement>(".circuit-node");
		const nodeShells = root.querySelectorAll<SVGElement>(".circuit-node-shell");
		const nodeLabels = root.querySelectorAll<SVGTextElement>(".circuit-node-label");
		const traces = root.querySelectorAll<SVGPathElement>(".circuit-trace");
		const pulses = root.querySelectorAll<SVGPathElement>(".circuit-pulse");
		const rows = root.querySelectorAll<HTMLDivElement>(".flow-row");

		// Initial states
		utils.set(nodes, { opacity: 1, scale: 1 });
		utils.set(nodeShells, { strokeOpacity: 0.35, fillOpacity: 0.08 });
		utils.set(nodeLabels, { opacity: 0.72 });
		utils.set(traces, { strokeDashoffset: 500 });
		utils.set(pulses, { strokeDashoffset: 500, opacity: 0.2 });
		utils.set(rows, { opacity: 0.4 });

		setActiveNodeIndex(-1);

		const tl = createTimeline({
			defaults: { ease: "inOutSine" },
			loop: true,
		});

		const stepSchedule = {
			Scope: [0, 1800, 3600, 5400],
			Work: [0, 2400, 5000, 7600],
			Review: [0, 1200, 2350, 3550],
			Improve: [0, 1000, 2100, 3200],
		} as const;

		const schedule = stepSchedule[item.title as keyof typeof stepSchedule] ?? [0, 900, 1800, 2700];

		const animatePulseSequence = (
			indices: number[],
			start: number,
			spacing: number,
			duration: number,
			reverse = false,
		) => {
			indices.forEach((idx, order) => {
				const pulse = pulses[idx];
				if (!pulse) return;
				tl.add(
					pulse,
					{
						opacity: [0.15, 0.95, 0.2],
						strokeDashoffset: reverse ? [-500, 500] : [500, -500],
						duration,
						ease: "linear",
					},
					start + order * spacing,
				);
			});
		};

		schedule.forEach((at, i) => {
			tl.add(root, {
				duration: 50,
				onBegin: () => setActiveNodeIndex(i),
			}, at);
		});

		// Animate traces drawing
		traces.forEach((trace, i) => {
			tl.add(trace, {
				strokeDashoffset: [500, 0],
				duration: item.title === "Scope" ? 1200 : 650,
				ease: "inOutQuad",
			}, item.title === "Scope" ? 320 + i * 220 : 150 + i * 140);
		});

		if (item.title !== "Scope") {
			// Baseline pulse animation
			pulses.forEach((pulse, i) => {
				tl.add(pulse, {
					opacity: [0.2, 0.9, 0.25],
					strokeDashoffset: [500, -500],
					duration: item.title === "Work" ? 1350 : 1500,
					ease: "linear",
				}, 400 + i * 170);
			});
		}

		// Static-node emphasis: only shell/label intensity changes
		nodeShells.forEach((shell, i) => {
			tl.add(shell, {
				strokeOpacity: [0.35, 0.78, 0.35],
				fillOpacity: [0.08, 0.18, 0.08],
				duration: 700,
				ease: "inOutQuad",
			}, 250 + i * 200);
		});

		nodeLabels.forEach((label, i) => {
			tl.add(label, {
				opacity: [0.72, 1, 0.72],
				duration: 650,
			}, 300 + i * 200);
		});

		// Command-specific choreography (nodes remain static)
		if (item.title === "Scope") {
			animatePulseSequence([0, 2], 700, 440, 1700);
			animatePulseSequence([1, 3], 2500, 440, 1650);
			animatePulseSequence([4], 4200, 1, 1800);
			animatePulseSequence([5, 7], 6100, 440, 1700);
			animatePulseSequence([6, 8], 7900, 440, 1650);
		}

		if (item.title === "Work") {
			animatePulseSequence([0, 1], 420, 360, 1100);
			animatePulseSequence([4, 5, 6, 7], 2300, 360, 1080);
			animatePulseSequence([4, 5, 6, 7], 4400, 360, 1080);
			animatePulseSequence([2, 3], 6900, 520, 1280);
		}

		if (item.title === "Review") {
			animatePulseSequence([0, 1], 260, 160, 860);
			animatePulseSequence([2, 3], 1080, 140, 820);
			animatePulseSequence([4, 5, 6], 1980, 180, 820);
			animatePulseSequence([7], 3000, 1, 740);
			animatePulseSequence([9], 3480, 1, 740);
			animatePulseSequence([8], 3980, 1, 780, true);
		}

		if (item.title === "Improve") {
			animatePulseSequence([0, 1, 2], 300, 130, 840);
			animatePulseSequence([3, 4, 5], 1120, 130, 840);
			animatePulseSequence([6, 7, 8, 9], 2100, 160, 860);
			animatePulseSequence([10], 3180, 1, 920);
		}

		// Animate rows
		rows.forEach((row, i) => {
			tl.add(row, {
				opacity: [0.4, 1],
				duration: 500,
			}, schedule[i] + 120);
		});

		animationsRef.current.push(tl);

		return () => {
			animationsRef.current.forEach((a) => a.pause());
			animationsRef.current = [];
		};
	}, [item]);

	const getNodeSize = (size?: "sm" | "md" | "lg") => {
		switch (size) {
			case "sm": return 32;
			case "lg": return 56;
			default: return 44;
		}
	};

	return (
		<div ref={rootRef} className="rounded-2xl border border-white/[0.08] bg-[rgba(12,12,12,0.6)] p-4 md:p-6">
			{/* Header */}
			<div className="mb-6">
				<h3 className="text-base font-medium text-white/90 md:text-lg">{item.scenarioTitle}</h3>
				<p className="mt-1 text-sm text-white/50">{item.scenarioSubtitle}</p>
			</div>

			{/* Circuit Board SVG */}
			<div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-[rgba(8,8,8,0.8)] p-4">
				<svg viewBox="0 0 660 200" className="w-full" style={{ overflow: "visible" }}>
					<defs>
						{/* Grid pattern */}
						<pattern id={`grid-${item.number}`} width="20" height="20" patternUnits="userSpaceOnUse">
							<circle cx="10" cy="10" r="0.5" fill="rgba(163,163,163,0.08)" />
						</pattern>

						{/* Glow filter */}
						<filter id={`glow-${item.number}`} x="-50%" y="-50%" width="200%" height="200%">
							<feGaussianBlur stdDeviation="3" result="blur" />
							<feMerge>
								<feMergeNode in="blur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>

					{/* Grid background */}
					<rect width="660" height="200" fill={`url(#grid-${item.number})`} />

					{item.title === "Scope" ? (
						<>
							<text x="170" y="14" textAnchor="middle" className="fill-white/85 font-mono" style={{ fontSize: "10px", letterSpacing: "0.12em" }}>
								PROBLEM
							</text>
							<text x="490" y="14" textAnchor="middle" className="fill-white/85 font-mono" style={{ fontSize: "10px", letterSpacing: "0.12em" }}>
								SOLUTION
							</text>
							<text x="121" y="196" textAnchor="middle" className="fill-white/40 font-mono" style={{ fontSize: "9px", letterSpacing: "0.12em" }}>
								DIVERGE
							</text>
							<text x="219" y="196" textAnchor="middle" className="fill-white/40 font-mono" style={{ fontSize: "9px", letterSpacing: "0.12em" }}>
								CONVERGE
							</text>
							<text x="441" y="196" textAnchor="middle" className="fill-white/40 font-mono" style={{ fontSize: "9px", letterSpacing: "0.12em" }}>
								DIVERGE
							</text>
							<text x="539" y="196" textAnchor="middle" className="fill-white/40 font-mono" style={{ fontSize: "9px", letterSpacing: "0.12em" }}>
								CONVERGE
							</text>
						</>
					) : null}

					{/* Connection traces */}
					{pathEntries.map((entry, i) => (
						<g key={`trace-${i}`}>
							{/* Base trace */}
							<path
								className="circuit-trace"
								d={entry.d}
								fill="none"
								stroke="rgba(163,163,163,0.25)"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeDasharray={entry.dashed ? "8 8" : "500"}
								strokeDashoffset="500"
							/>
							{/* Animated pulse */}
							<path
								className="circuit-pulse"
								d={entry.d}
								fill="none"
								stroke="rgba(220,220,220,0.75)"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeDasharray={entry.dashed ? "10 24" : "30 470"}
								strokeDashoffset="500"
								filter={`url(#glow-${item.number})`}
							/>
							{entry.label && typeof entry.labelX === "number" && typeof entry.labelY === "number" ? (
								<text
									x={entry.labelX}
									y={entry.labelY}
									textAnchor="middle"
									className="fill-white/45 font-mono"
									style={{ fontSize: "9px", letterSpacing: "0.08em" }}
								>
									{entry.label}
								</text>
							) : null}
						</g>
					))}

					{/* Nodes */}
					{item.nodes.map((node) => {
						if (node.render === "anchor") return null;

						if (node.render === "dot") {
							const labelColor = node.accent === "success" ? "rgba(34,197,94,0.95)" : "rgba(163,163,163,0.95)";
							const dotFill = node.accent === "success" ? "rgba(22,163,74,0.95)" : "rgba(248,250,252,0.95)";
							const x = node.labelSide === "right" ? node.x + 14 : node.x;
							const y = node.labelSide === "top" ? node.y - 10 : node.labelSide === "right" ? node.y + 8 : node.y + 24;
							const anchor = node.labelSide === "right" ? "start" : "middle";

							return (
								<g key={node.id} className="circuit-node">
									<circle
										className="circuit-node-shell"
										cx={node.x}
										cy={node.y}
										r={7}
										fill={dotFill}
										stroke={dotFill}
										strokeWidth="1"
									/>
									{node.label ? (
										<text
											className="circuit-node-label font-mono"
											x={x}
											y={y}
											textAnchor={anchor}
											style={{ fontSize: "10px", fill: labelColor }}
										>
											{node.label}
										</text>
									) : null}
								</g>
							);
						}

						const size = getNodeSize(node.size);
						const halfSize = size / 2;

						return (
							<g key={node.id} className="circuit-node">
								{/* Node background with pulse */}
								<rect
									className="circuit-node-shell"
									x={node.x - halfSize}
									y={node.y - halfSize}
									width={size}
									height={size}
									rx={8}
									fill="rgba(163,163,163,0.08)"
									stroke="rgba(163,163,163,0.35)"
									strokeWidth="1.5"
								/>

								{/* Inner highlight */}
								<rect
									x={node.x - halfSize + 2}
									y={node.y - halfSize + 2}
									width={size - 4}
									height={size - 4}
									rx={6}
									fill="none"
									stroke="rgba(255,255,255,0.05)"
									strokeWidth="1"
								/>

								{/* Label */}
								<text
									className="circuit-node-label fill-white/70 font-mono"
									x={node.x}
									y={node.y + 4}
									textAnchor="middle"
									style={{ fontSize: node.size === "sm" ? "9px" : "10px" }}
								>
									{node.label ?? ""}
								</text>
							</g>
						);
					})}
				</svg>
			</div>

			{/* Step cards */}
			<div className="mt-6 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
				{item.scenarioSteps.map((step, i) => {
					const isActive = activeNodeIndex >= i;

					return (
						<div
							key={step.label}
							className={`flow-row rounded-lg border px-3 py-2.5 transition-all duration-300 ${
								isActive
									? "border-white/[0.12] bg-white/[0.04]"
									: "border-white/[0.06] bg-transparent"
							}`}
						>
							<div className="flex items-center gap-2">
								<span
									className={`flex h-5 w-5 items-center justify-center rounded font-mono text-[10px] ${
										isActive ? "bg-white/10 text-white/80" : "bg-white/[0.04] text-white/40"
									}`}
								>
									{i + 1}
								</span>
								<p
									className={`font-mono text-[11px] ${
										isActive ? "text-white/80" : "text-white/40"
									}`}
								>
									{step.label}
								</p>
							</div>
							<p className="mt-1 pl-7 text-[11px] text-white/40">{step.detail}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export function FluxWorkflow() {
	const [activeCommand, setActiveCommand] = useState(commands[0].command);

	const activeItem = useMemo(
		() => commands.find((item) => item.command === activeCommand) ?? commands[0],
		[activeCommand],
	);

	return (
		<section id="workflow" className="bg-[rgb(8,8,8)] @container py-16 md:py-24 lg:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto mb-12 max-w-2xl text-center">
					<div className="mx-auto mb-6 w-fit rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">
						Command Reference
					</div>
					<h2 className="text-3xl font-semibold text-white/95 md:text-4xl">
						Click a command, see the flow
					</h2>
					<p className="mt-4 text-base text-white/50">
						Each slash command has its own execution pattern. Pick one and watch the step-by-step diagram.
					</p>
				</div>

				{/* Command buttons */}
				<div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
					{commands.map((item) => {
						const Icon = item.icon;
						const active = item.command === activeCommand;
						return (
							<button
								type="button"
								key={item.command}
								onClick={() => setActiveCommand(item.command)}
								className={`group rounded-xl border p-4 text-left transition-all duration-200 ${
									active
										? "border-white/20 bg-white/[0.06]"
										: "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]"
								}`}
							>
								<div className="mb-3 flex items-center gap-2">
									<div
										className={`flex h-7 w-7 items-center justify-center rounded-lg border ${
											active ? "border-white/20 bg-white/10" : "border-white/[0.08] bg-white/[0.04]"
										}`}
									>
										<Icon className={`h-3.5 w-3.5 ${active ? "text-white/80" : "text-white/50"}`} />
									</div>
									<span className="font-mono text-[11px] text-white/40">{item.number}.</span>
								</div>
								<p className={`text-sm font-medium ${active ? "text-white/90" : "text-white/70"}`}>
									{item.title}
								</p>
								<code
									className={`mt-2 block rounded border px-2 py-1 font-mono text-[10px] ${
										active
											? "border-white/[0.12] bg-white/[0.06] text-white/70"
											: "border-white/[0.06] bg-white/[0.02] text-white/50"
									}`}
								>
									{item.command}
								</code>
							</button>
						);
					})}
				</div>

				{/* Diagram */}
				<div className="mt-6">
					<CircuitDiagram key={activeItem.command} item={activeItem} />
				</div>

				{/* Footer info */}
				<div className="mt-6 grid gap-3 md:grid-cols-[1.2fr_1fr]">
					<div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
						<p className="text-sm text-white/50">{activeItem.description}</p>
					</div>
					<div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
						<p className="font-mono text-[10px] uppercase tracking-wider text-white/40">Active command</p>
						<code className="mt-2 block rounded border border-white/[0.08] bg-white/[0.04] px-3 py-2 font-mono text-xs text-white/70">
							{activeItem.command}
						</code>
					</div>
				</div>
			</div>
		</section>
	);
}

import { httpRouter } from "convex/server";
import { healthCheck } from "./healthCheck";

const http = httpRouter();

http.route({
	path: "/health",
	method: "GET",
	handler: healthCheck,
});

export default http;

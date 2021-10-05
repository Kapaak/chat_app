import { Server } from "socket.io";
// import { Server as HttpServer } from "http";

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async (req, res) => {
	if (!req.socket.server.io) {
		console.log("New Socket.io server....");
		const httpServer = res.socket.server;
		const io = new Server(httpServer, {
			path: "/api/socketio",
		});

		res.socket.server.io = io;
	}
	res.end();
};

import { WebSocketServer } from "ws";
import {client} from "@repo/db/client";

const server = new WebSocketServer({ 
    port: 3001 
});

server.on("connection", async (socket) => {
    await client.user.create({
        data:{
            userName: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    socket.send("Hi there! Welcome to the WebSocket server.");
});
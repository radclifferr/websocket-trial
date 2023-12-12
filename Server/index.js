import { createServer } from "http";
import { Server } from "socket.io";
import sampleData from "./sampleData.js";
import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.emit("connection");
  //send dataset to client
  socket.emit("data", sampleData)
});


app.get("/", (req, res) => {
  res.sendfile("index.html");
});

server.listen(3000, () => console.log("server listening on 3000"));

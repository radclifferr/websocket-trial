import { createServer } from "http";
import { Server } from "socket.io";


const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials:true
  }
});

io.on("connection", (socket) => {

  socket.emit("hello", "world");

  socket.on("howdy", (arg) => {
    console.log(arg)
  })
})

httpServer.listen(3000, () => console.log("listening on 3000"));

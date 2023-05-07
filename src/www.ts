import express from "express";

const PORT = process.env.PORT || 5000;
const server = express();
const onServerStartup = () =>
  console.info(`Server is running on http://localhost:${PORT}`);

// middlewares

// routes
server.get("/", (req, res) =>
  res.send({ server: "Miratonrose server is live 🚀" })
);

// listen to server
server.listen(PORT, onServerStartup);

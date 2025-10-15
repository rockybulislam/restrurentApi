import express from "express";

const app = express();

const server = (PORT) => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
};
export default server;

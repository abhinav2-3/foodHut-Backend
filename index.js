import express from "express";
import { database } from "./Database.js";
import router from "./routes/user-Routes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("https://foodhut-server.vercel.app/", router);

app.get("/", (req, res) => {
  res.send("Namaste India");
});

app.get("/user", (req, res) => {
  res.send(<h1>foood hut user</h1>);
});

database();

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on http://localhost:${process.env.PORT}`);
});

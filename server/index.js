import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`);
});

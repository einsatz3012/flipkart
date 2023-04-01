import express from "express";
import Connection from "./database/db.js";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import DefaultData from "./default.js";
import Router from "./routes/route.js";

const app = express();

config();

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

DefaultData();

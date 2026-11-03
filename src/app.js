import express from "express";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Project Management Application API!");
});

// Basic configurations middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static("public"));

// Cors configurations middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(",") ?? "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

export default app;

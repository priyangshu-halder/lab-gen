import express from "express"
import cors from "cors"

const app = express()

app.use(cors(
  {
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:8001",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }
))

app.get("/", (req, res) => {
  res.send("Hello World!")
})
export default app
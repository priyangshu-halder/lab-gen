import dotenv from "dotenv"
import app from "./app.js"
dotenv.config({
    path: "./.env",
})
const PORT = process.env.PORTNAME || 3001;

// Example API endpoint


// Serve React build files in production


app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));

import app from "./app.js";
import { connectDB } from "./db/connection.js";
import { validateEnv } from "./validators/envValidator.js";

const PORT = process.env.PORT || 8001;

// Validate environment variables
try {
  validateEnv();
} catch (err) {
  console.error("❌ Environment validation failed:", err.message);
  process.exit(1);
}

// Connect to Database
connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(
    `✅ Server running on http://localhost:${PORT}`
  );
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
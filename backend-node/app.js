const express = require("express");
const cors = require("cors");
const llmRoutes = require("./routes/llmRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", llmRoutes); // All API routes

const PORT = 3000;
app.listen(PORT, () => console.log(`Node.js backend listening on http://localhost:${PORT}`));

import 'dotenv/config'
import express from 'express';
import connectDB from "./config/db.js";
import userRoutes from "./routes/api/userRoutes.js";

connectDB()

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/users", userRoutes);

app.use("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => {
    console.log('Server running on port' + PORT);
});
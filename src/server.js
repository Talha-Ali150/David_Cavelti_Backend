import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import app from "./app.js";


const PORT = process.env.PORT || 8080;
console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
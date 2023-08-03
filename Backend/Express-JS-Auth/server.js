import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";
import cors from "cors";
import userRoute from "./routes/userRoutes.js";

// const corsOptions = {
//   origin: "http://localhost:5173",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("hello from the server");
});

const PORT = process.env.PORT || 8000;
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("server started and connected to the DB");
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();

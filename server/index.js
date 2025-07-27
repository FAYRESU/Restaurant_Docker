import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";


const PORT = process.env.PORT || 5000;
import restaurantRouter from "./routers/restaurant.routers.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Restaurant Restful API");
});

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//use router
app.use("/api/v1/restaurants", restaurantRouter);

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});

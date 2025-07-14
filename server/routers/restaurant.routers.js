import restaurantController from "../controllers/restaurant.controller.js";

import express from "express";
const router = express.Router();

//POST https//localhost:5000/api/v1/restaurants
router.post("/", restaurantController.create);

export default router;

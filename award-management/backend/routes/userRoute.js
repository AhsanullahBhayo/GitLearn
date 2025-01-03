import express from "express";
import {
  addAward,
  deleteAward,
  getAward,
  updateAward,
} from "../controller/userController.js";

const route = express.Router();

route.post("/addAward", addAward);
route.get("/getAward", getAward);
route.put("/updateAward/:id", updateAward);
route.delete("/deleteAward/:id", deleteAward);
export default route;

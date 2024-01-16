import express from "express";
import SaleeController from "../controllers/sale.controller.js";

const router = express.Router();

router.post("/", SaleeController.createSale);
router.get("/", SaleeController.getSales);
router.get("/:id", SaleeController.getSale);
router.delete("/:id", SaleeController.deleteSale);
router.put("/", SaleeController.updateSale);

export default router;

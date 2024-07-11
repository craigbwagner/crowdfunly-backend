const express = require("express");
const verifyToken = require("../middleware/verify-token");
const router = express.Router();

const campaignsController = require("../controllers/campaigns");

router.use(verifyToken);

router.post("/", campaignsController.create);

// maybe move this route to public routes? so anyone can see the campaigns?
router.get("/", campaignsController.index);

// maybe move this route to public routes? so anyone can see the campaigns?
router.get("/:campaignId", campaignsController.show);

router.put("/:campaignId", campaignsController.update);

router.delete("/:campaignId", campaignsController.deleteCampaign);

module.exports = router;

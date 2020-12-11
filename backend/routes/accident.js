const express = require('express');
const router = express.Router();

const Accident = require('../controllers/accident');

router.post("/addAccident", Accident.addAccident);

// router.patch("/updateAccident", Accident.updateSubCategory);

// router.get("/getAccidentById", Accident.getSubCategoryById);

router.get("/getAccidents", Accident.getAccidents);

// router.delete("/deleteAccident", Accident.deleteSubCategory);

router.get('/downloadCSV', Accident.downloadCSV);

router.get('/accidentsJSON', Accident.accidentsJSON);

module.exports = router;
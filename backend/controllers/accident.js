const mongoose = require("mongoose");
const Accident = require("../models/accident");

exports.addAccident = async (req, res) => {
  const accident = new Accident({
    ...req.body
  })

  try {
    const result = await accident.save();
    return res.status(200).json({
      message: "Accident is added",
      result: result
    })
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Couldn't save in database!"
    })
  }
}

exports.getAccidents = async (req, res) => {
  try {
    const accidents = await Accident.find();
    return res.status(200).json(accidents)
  } catch (error) {
    return res.status(404).json(error)
  }
}
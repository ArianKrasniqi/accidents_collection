const fs = require('fs');
const mongoose = require("mongoose");
const Accident = require("../models/accident");

const { Parser } = require('json2csv');
const json2csvParser = new Parser();


const { now } = require('../utils');

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

exports.downloadCSV = async (req, res) => {
  try {
    const accidents = await Accident.find();

    const formatedAccidents = accidents.map(acc => {
      const [longitude, latitude] = acc.location.coordinates;
      const {
        _id, description, humidity, visibility, wind_speed, weather, datetime, severity,
        vehicles_involved, people_involved, casualties, road_category, speed_limit
      } = acc;

      return {
        latitude, longitude, _id, description, humidity, visibility,
        wind_speed, weather, datetime, severity, vehicles_involved,
        people_involved, casualties, road_category, speed_limit
      }
    });

    const csv = json2csvParser.parse(formatedAccidents);
    const csvTitle = `Kosovo accidents (${now()}).csv`;

    fs.writeFileSync(csvTitle, csv);

    res.download(csvTitle);
    fs.unlink(csvTitle);
  }
  catch (error) {

  }
}
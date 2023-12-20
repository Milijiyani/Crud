const { json } = require("express");
const Demo = require("../model/section");
const mongoose = require("mongoose");
const path = require("path");
exports.getDemoPage = async (req, res, next) => {
  try {
    const getdata = await Demo.find();
    res.status(200).json({
      message: "it is work",
      data: getdata,
    });
  } catch (error) {
    console.error("demoController getdemo error", error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.addDemo = async (req, res, next) => {
  try {
    const demoData = {
      name: req.body.name,
      price: req.body.price,
      categorie: req.body.categorie,
      image: req.file.filename,
    };
    const demo = await Demo.create(demoData);
    res.status(200).json({
      message: "it is work",
      data: demo,
    });
  } catch (error) {
    console.error("demoController addDemo error", error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.UpdateDemoPage = async (req, res, next) => {
  try {
    const getdata = await Demo.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      categorie: req.body.categorie,
      image: req.file.filename,
    });
    res.status(200).json({
      message: "it is work",
      data: getdata,
    });
  } catch (error) {
    console.error("demoController getdemo error", error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.DeleteDemoPage = async (req, res, next) => {
  try {
    const getdata = await Demo.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "200",
      message: "it is work",
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      error: error.message,
    });
  }
};

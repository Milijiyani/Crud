const { json } = require("express");
const Contact = require("../model/contact");
const mongoose = require("mongoose");
// const { token } = require("morgan");
var jwt = require("jsonwebtoken");

exports.addContactPage = async (req, res, next) => {
    try {

        const contactData = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        };
        // console.log("registerData ::",registerData);

        const contact = await Contact.create(contactData);
        res.status(200).json({
            message: "contact successfully",
            data:contact
        });

    } catch (error) {
        console.error("contact error", error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

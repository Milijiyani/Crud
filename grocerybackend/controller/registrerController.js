const { json } = require("express");
const Register = require("../model/registrer");
const mongoose = require("mongoose");
// const { token } = require("morgan");
var jwt = require("jsonwebtoken");

exports.addRegisterPage = async (req, res, next) => {
    try {

        const registerData = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phoneno: req.body.phoneno,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            email: req.body.email,
            password: req.body.password
        };
        // console.log("registerData ::",registerData);

        const register = await Register.create(registerData);
        var token = await jwt.sign(
            {
                userData: register,
            },
            "test"
            );
        res.status(200).json({
            message: "Registration successfully",
            data: token
        });

    } catch (error) {
        console.error("Registration error", error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

exports.addLoginPage = async (req, res, next) => {
    try {
       
        // console.log("req.body emailadd", req.body.emailadd);
        const data = await Register.findOne({ email: req.body.email })
        console.log(data)
        if (!data) {
            throw new Error("user not found");
        } else if (data.password === req.body.password) {
            var token = await jwt.sign(
                {
                    userData: data,
                },
                "test"
            );
            res.status(200).json({
                message: "Log in successfully",
                data: token
            });
        } else {
            throw new Error("password is wrong");
        }
    } catch (error) {
        console.error("Log in error", error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

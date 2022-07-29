const express = require('express');
const ExperienceHosting = require("../models/ExperienceHosting");
const Category = require('../models/Category');
const SubCategory = require('../models/SubCategory');
const Activity=require("../models/Activity");
router = express.Router();

// ROUTE 1 - Get all experience using: GET "experience/all". Login not required
router.get('/all', async (req, res) => {
    try {
        //get all the experiences
        const experiences = await ExperienceHosting.find().populate('host', '-password'); //except the password

        //send a response after getting experiences
        res.json(
            experiences,
        );

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error from experience/all');
    }
});

// ROUTE 2 - Get an experience using: GET "experience/hostingid/:id". Login not required
router.get('/hostingid/:id', async (req, res) => {
    try {
        //get an experience
        const experience = await ExperienceHosting.findById(req.params.id).populate('host', '-password').populate('activities'); //except the password

        //send a response after getting experience
        res.json(experience);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error from experience/hostingid');
    }
});

// ROUTE 3 Get all experience categories of hosting using : GET "experience/categories". Login not required
router.get('/categories', async (req, res) => {
    try {
        //get all the categories
        const categories = await Category.find();

        //send a response after getting categories
        res.json(categories);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error from host/experience/categories');
    }
});
// ROUTE 4 Get all experience subcategories of hosting using : POST "experience/subcategories". Login not required
router.post('/subcategories', async (req, res) => {
    console.log("body: ", req.body);
    try {
        //get all the categories
        console.log(req.body.category);
        const subCategories = await SubCategory.find({categoryName: req.body.category});

        //send a response after getting categories
        res.json(subCategories);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error from host/experience/subCategories');
    }
});
// ROUTE 5 posting an activity using : GET "experience/activity/hostingid".
router.get('/activity/:id',[], async (req, res) => {
    try {
         
        //get all activities
        const activities = await Activity.find({"hostingId":req.params.id});
        
        //send a response after getting experience hosting
        res.json(
            activities);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error from get experience hosting');
    }
});

module.exports = router;
const router = require('express').Router();
const questionServices = require('../services/questionServices');

router.get('/', async (req, res) => {
    const questions = await questionServices.getAll();
    res.json(questions);
});

router.post('/', async (req, res) => {
    const data = req.body;
    const questionnaire = await questionServices.create(data);
    res.json(questionnaire);

});




module.exports = router;
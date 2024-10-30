const router = require('express').Router();
const jobsService = require('../services/jobsService');

router.get('/', async (req, res) => {
    const jobs = await jobsService.getAll();
    res.json(jobs);
});

router.post('/', async (req, res) => {
    const data = req.body;
    const date = new Date().toISOString();

    const jobs = await jobsService.create({...data, date: date});

    res.json(jobs);
});

router.get('/:jobId',async (req, res) => {
    const jobId = req.params.jobId;
    const job = await jobsService.getOne(jobId);

    res.json(job);
});

router.post('/:jobId/candidate', async (req, res) => {
    const data = req.body;
    const jobId = req.params.jobId;

    await jobsService.candidate({jobId, data});

    res.json({ok: true});
});

module.exports = router;
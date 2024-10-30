const Job = require('../models/Jobs');
const Company = require('../models/Company');

exports.getAll = () => Job.find();

exports.create = async (data) => {
    const job = await Job.create(data);

    const company = await Company.findById(data.owner);
    company.jobs.push(job);
    await company.save();
    return;
};

exports.getOne = (jobId) => Job.findById(jobId);

exports.candidate = async (data) =>{
    const job = await Job.findById(data.jobId);
    job.candidates.push(data.data);
    await job.save();
    return;
};
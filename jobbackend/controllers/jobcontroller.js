const Job = require("../models/jobModel");
const { calculateHoursAgo } = require("../utils/dateUtils");

exports.getJobs = (req, res) => {
  const filters = req.query;
  Job.getAll(filters, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const jobs = results.map((job) => ({
      ...job,
      hoursAgo: calculateHoursAgo(job.created_at),
    }));

    res.json(jobs);
  });
};

exports.createJob = (req, res) => {
  const data = {
    company_logo: req.body.company_logo,
    job_title: req.body.job_title,
    experience: req.body.experience,
    salary: req.body.salary,
    job_type: req.body.job_type,
    location: req.body.location,
    description: req.body.description,
    created_at: new Date(),
  };

  Job.create(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Job created" });
  });
};

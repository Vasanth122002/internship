const db = require("../config/db");

const Job = {
  getAll: (filters, callback) => {
    let query = "SELECT * FROM jobs WHERE 1=1";
    const params = [];

    if (filters.title) {
      query += " AND job_title LIKE ?";
      params.push(`%${filters.title}%`);
    }
    if (filters.location) {
      query += " AND location = ?";
      params.push(filters.location);
    }
    if (filters.jobType) {
      query += " AND job_type = ?";
      params.push(filters.jobType);
    }
    if (filters.salary) {
      query += " AND salary >= ?";
      params.push(filters.salary);
    }

    db.query(query, params, callback);
  },

  create: (data, callback) => {
    const query = "INSERT INTO jobs SET ?";
    db.query(query, data, callback);
  },
};

module.exports = Job;

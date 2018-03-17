const Employer = require('../models/employer'),
  { pluck } = require('../util/pluck');

module.exports = function (app) {

  app.route('/employees')
    .get(function (req, res, next) {
      Employer.find(null, {name: 1, lastName: 1, percetegens: 1 })
        .exec(function (err, employees) {
          if (err) { next(err); }
          console.log(employees);
          return res.end(JSON.stringify(employees));
        });
    })
    .post(function (req, res, next) {
      const body = req.body;
      let fileEmployer = pluck(body, 'name', 'lastName', 'percetegens'),
        employer = new Employer(fileEmployer);
      employer.save(function (err, employer) {
        if (err) {
          return next(err)
        }
        res.json(employer);

      });
    });
}
const Employer = require('../models/employer'),
    pluck = require('../util/pluck');

module.exports = function (app) {
    
    app.route('/employees')
        .get(function (req, res, next) {
            // About lean: http://mongoosejs.com/docs/api.html#query_Query-lean
            Employer.find().lean().exec(function (err, employees) {
                if (err) { next(err); }
                return res.end(employees);
            });
        })
        .post(function (req, res, next) {
            const body = req.body;
            let fileEmployer = pluck(body, 'name', 'lastName', 'percetegens'),
                employer = new Employer(fileEmployer);
            employer.save();
            
        });
}
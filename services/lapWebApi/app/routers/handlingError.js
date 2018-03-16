module.exports = function (app) {
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(err.status || 500);
        res.json({
                status: err.status,
                message: err.message
            }
        );
    });
}
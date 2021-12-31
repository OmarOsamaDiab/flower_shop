const errorHandler = (err, req, res, next) => {
    if (err.isBoom) {
        return res.status(err.output.statusCode).json({
            err: err.output.payload.message,
            statusCode: err.output.statusCode
        })
    } else {
        console.error(err)
        res.status(500).json({
            err: 'internal server error',
            statusCode: 500
        })
    }
}
module.exports = {
    errorHandler
}
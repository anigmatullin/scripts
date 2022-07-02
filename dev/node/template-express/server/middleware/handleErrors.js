const ApiError  = require('../exceptions/apierror');

function handleErrors(err, req, res, next)
{
    if (error instanceof ApiError)
    {
        return res
            .status(err.status)
            .json({
                message: err.message,
                errors: err.errors
            });
    }

    return res.status(500).json({message: "Application Error"});
}

module.exports = handleErrors;

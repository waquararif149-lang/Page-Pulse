import ApplicationError from "../errorhandlers/errorhandler.js";

export default function errorHandler(err, req, res, next) {
    if (err instanceof ApplicationError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
    }

    console.error(err);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
}
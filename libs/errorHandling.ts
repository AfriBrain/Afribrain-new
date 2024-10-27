"use server";
import { sendEmail } from "./emailActions";
const handleError = (err: any) => {
    let statusCode = 500;
    let errorMessage = "Sorry,something went wrong";

    if (err.code === 11000) {
        statusCode = 409;
        errorMessage = "This information already exists";
    } else if (err.name === "ValidationError") {
        statusCode = 400;
        errorMessage = err.message;
    } else if (err.name === "CastError") {
        statusCode = 422;
        errorMessage = "The resource identity is invalid or doesn't exist.";
    } else {
        errorMessage = err.message;
    }

    const emailMessage = `Error description , ${JSON.stringify(err)} `;
    const response = {
        status: statusCode,
        message: errorMessage,
    };
    if (err.message) {
        sendEmail({
            to: process.env.TROUBLESHOOTING_EMAIL_ACCOUNT,
            subject: err.message.toUpperCase(),
            text: emailMessage,
        });
    }
    return JSON.stringify(response);
};

const handleRenewTokenError = (err: any) => {
    if (err.name === "TokenExpiredError") {
        const response = {
            status: 401,
            message: "Token expired",
        };
        return JSON.stringify(response);
    }
    if (err.name === "JsonWebTokenError") {
        const response = {
            status: 403,
            message: "Invalid token",
        };
        return JSON.stringify(response);
    }

    const response = {
        status: 500,
        message: "Something went wrong while renewing token",
    };
    sendEmail({
        to: process.env.TROUBLESHOOTING_EMAIL_ACCOUNT,
        subject: "RENEW TOKEN ERROR",
        text: "Something went wrong while renewing token",
    });
    return JSON.stringify(response);
};

const handleJwtError = (err: any) => {
    if (err.name === "TokenExpiredError") {
        const response = {
            status: 401,
            message: "Token expired",
        };
        return JSON.stringify(response);
    }
    if (err.name === "JsonWebTokenError") {
        const response = {
            status: 403,
            message: "Invalid Token",
        };
        return JSON.stringify(response);
    }

    const emailMessage = `${err.name.toUpperCase()}.Comprehensive error : ${JSON.stringify(
        err
    )} `;
    sendEmail({
        to: process.env.TROUBLESHOOTING_EMAIL_ACCOUNT,
        subject: "JWT ERROR",
        text: emailMessage,
    });
    const response = {
        status: 500,
        message: "Something went wrong during authentication",
    };
    return JSON.stringify(response);
};

export { handleError, handleJwtError, handleRenewTokenError };

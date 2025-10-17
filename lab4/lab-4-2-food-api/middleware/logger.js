// File: ./middleware/logger.js

const logger = (req, res, next) => {
    // Log the request method and the original URL
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    
    // Pass control to the next middleware in the stack
    next();
};

module.exports = logger;
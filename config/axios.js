const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const axiosInstance = axios.create({
    baseURL: process.env.API_ENDPOINT,
    headers: {
        'Authorization': `Bearer ${process.env.MAILCOACH_API_TOKEN}`
    }
});

module.exports = axiosInstance;
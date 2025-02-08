require('dotenv').config()
const express = require("express");
const app = express();

const PORT = process.env.PORT;
const authRoutes = require('./routes/auth.routes');

app.use('/api/v1/auth', authRoutes)


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})
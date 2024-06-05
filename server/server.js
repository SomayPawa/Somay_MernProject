require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');


// handling cors issue
const corsOption = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true,
};
app.use(cors(corsOption));

app.use(cors(corsOption));

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running this port ${PORT} number`);
    });
});
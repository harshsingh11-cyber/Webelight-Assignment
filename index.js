import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/crudRoute.js";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {swaggerOptions} from "./swagger.js";



const app = express();

dotenv.config();
const baseUrl = process.env.MONGO_URI;
const PORT = process.env.PORT || 8000;
const SECRET_KEY = process.env.SECRET_KEY;


mongoose.connect(`${baseUrl}`);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));



//*****************-------Swagger Documentation ------**************/
// const swaggerSpec = swaggerJSDoc(swaggerOptions);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkwMTYyNTY4LCJleHAiOjE2OTAxNjYxNjh9.-s_TKJRxGEuH4emXNAktbmO4AhvjqXPGk_sWcxD-Zuc
  
  // Generate Swagger Spec
  const swaggerSpec = swaggerJsDoc(swaggerOptions);
  
  // Serve Swagger documentation using Swagger UI
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
























app.use("", router);

app.get('/', (req, res) => {
    res.send("hello now started");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "harshsingh") {
        const user = {
            username,
            role: "admin",
        };
        const token = jwt.sign(user, SECRET_KEY, {
            expiresIn: "1h",
        });
        res.json({ token });
    } else {
        res.status(401).json({ error: "Invalid credentials" });
    }
});


//   {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkwMDUwNDE1LCJleHAiOjE2OTAwNTQwMTV9.YgPIMZMVCLn0qxiqrjiecgeQqxxZ-CJdgkpBoM_mucc"
//   }




app.listen(PORT, () => {
    console.log("Server is started on port number 4000 or 8000");
});
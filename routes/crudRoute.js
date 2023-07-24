import express from "express";
import { createUser, updateUser, deleteUser, getUser, searchUser, getUsers } from "../controler/control.js";
import { authentication, authRole } from "../middleware/auth.js";
// import swaggerUi from "swagger-ui-express";
// import swaggerJSDoc from "swagger-jsdoc";
// import swaggerOptions from "../swagger.js";

const router = express.Router();
 
// const swaggerSpec = swaggerJSDoc(swaggerOptions);

// router.use("/api-docs", swaggerUi.serve);
// router.get("/api-docs", swaggerUi.setup(swaggerSpec));

router.get("/",authentication, getUsers);
router.get("/:_Id", authentication, getUser);
router.get("/search/:key",authentication, searchUser);
router.post('/',authentication, authRole("admin"),createUser);
router.put("/:_Id",authentication, authRole("admin"),updateUser);
router.delete("/:_Id",authentication, authRole("admin"), deleteUser);

export default router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkwMDU4MDk0LCJleHAiOjE2OTAwNjE2OTR9.bzvR3dz9dLpoDHqQ2gArqwtPwCvNT1jqyV7ZZkYIvC8

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkwMTYyODM0LCJleHAiOjE2OTAxNjY0MzR9._phTbTes95iWt9ro2sD8ql5ELoRzHB4ZZPySxpAhRr0
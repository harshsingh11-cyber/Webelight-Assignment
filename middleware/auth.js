import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


const SECRET_KEY = process.env.SECRET_KEY;

export const authentication = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }
  
  export const authRole = (role) => {
    return (req, res, next) => {
      if (req.user && req.user.role === role) {
        next();
      } else {
        res.sendStatus(403);
      }
    }
  }
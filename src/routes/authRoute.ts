import express, { Router, Request, Response } from "express";
import { login } from "../controller/authController";

export const authRoute: Router = express.Router();

authRoute.get("/login", login);

import  models from "../models/usermodel.js";
import * as userservice from "../services/userservice.js";
import { validationResult } from "express-validator";

export const createuserController = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    console.log(req.body);
  try {
    const user = await userservice.createuser(req.body);
    const token = await usermodel.generateToken();
    res.status(201).json(user).json(user,token);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};


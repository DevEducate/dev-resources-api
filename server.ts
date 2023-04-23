require("dotenv").config();

import express from "express";


const server = express();
const port = process.env.PORT || 3000;
import connectDB from "./database/connect";



const startServer = async () => {
  try {
    await connectDB(process.env.DATABASE_URL as string);
    server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();

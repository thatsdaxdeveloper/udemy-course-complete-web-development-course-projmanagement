import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
})

let version = process.env.VERSION;
console.log(`Hello from script.js, version: ${version}`);
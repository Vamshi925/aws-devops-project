const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("DevOps AWS Project - Phase 1 Running 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "devops-db.clws0gy0kg8i.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "StrongPassword123",
  database: "devopsdb"
})

connection.connect(err => {
  if (err) {
    console.log("DB connection failed")
  } else {
    console.log("Connected to RDS")
  }
})

const AWS = require("aws-sdk")

const s3 = new AWS.S3()

const params = {
  Bucket: "devops-project-vamshi-bucket",
  Key: "sample.txt",
  Body: "Hello from DevOps App"
}

s3.upload(params, (err, data) => {
  if (err) console.log(err)
  else console.log("Uploaded:", data.Location)
})

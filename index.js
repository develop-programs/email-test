const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.get("/", async (req, res) => {
  const users = await prisma.test.findMany();
  res.send(users).status(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

import { PrismaClient } from '@prisma/client';
require('dotenv').config();
import express from 'express';
import { _ } from 'lodash';

const port = process.env.PORT || 3000;
const app = express()
const prisma = new PrismaClient()
app.use(express.json())


const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}`),
)



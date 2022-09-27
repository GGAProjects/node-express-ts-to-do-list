import express from 'express'
import cors from 'cors'
import 'module-alias/register';
require("dotenv").config();

import { router } from './routes'

const app = express()
const corsOptions = {}

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// app.get('/', (_req, res) => {
// 	res.send('OK');
// });

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log('Listening on port new version test' + port)
})
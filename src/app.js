/* IMPORT EXPRESS AND SAVE THE METHODS IN APP */
import express from 'express';
const app = express();

import path from 'path';// IMPORT PATH

// SETTINGS TO USE dirname
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// GLOBAL MIDDLEWARES
app.use(express.static(path.join(__dirname, '../public'))); // TO USE STATIC FILES
app.use(express.urlencoded({extended: false})); // TAKE THE DATA FROM THE BODY
app.use(express.json()); // TAKE THE DATA FROM THE BODY

// SETTINGS TEMPLATE ENGINE: ENGINE JAVA SCRIPT
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// IMPORT THE MAIN ROUTER: APP.JS --> ROUTER --> CONTROLLER
import mainRouter from './routers/mainRouter.js';

// ------------------------------- ROUTES ------------------------------------- //

app.use('/', mainRouter);

// --------------------------------------------------------------------------- //

// SERVER IN PORT 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
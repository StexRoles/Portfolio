// IMPORT EXPRESS AND USE ROUTER
import express from 'express';
const router = express.Router();

// IMPORT mainController TO USE ITS METHODS
import mainController from '../controllers/mainController.js';

//---------------------------------------------------------------//

// ROUTE FROM THE MAIN PAGE
router.get('/', mainController.index);

// ROUTE FROM THE ABOUT PAGE
router.get('/about', mainController.about);

// ROUTE FROM THE PROJECTS PAGE
router.get('/projects', mainController.projects);

//---------------------------------------------------------------//
// EXPORT ROUTER
export default router;
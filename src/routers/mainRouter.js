// IMPORT EXPRESS AND USE ROUTER
import express from 'express';
const router = express.Router();

// IMPORT mainController TO USE ITS METHODS
import mainController from '../controllers/mainController.js';

//---------------------------------------------------------------//

// ROUTE FROM THE MAIN PAGE
router.get('/', mainController.index);


//---------------------------------------------------------------//
// EXPORT ROUTER
export default router;
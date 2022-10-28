import { Router } from "express";
import {getUsers,createdonations,redonation,checkdonations} from '../controllers/users'; 
import asyncMiddleware from "../../middleware/async";
const router = Router();

router.get('/getusers', asyncMiddleware(getUsers));
router.post('/receivedonation', asyncMiddleware(createdonations));
router.put('/redonation/:id', asyncMiddleware(redonation));
router.get('/checkdonations/:id', asyncMiddleware(checkdonations));

export default router;
import { Router } from 'express';
import getQuotle from './getQuotle.js';

const router = Router();

router.use(getQuotle);

export default router;
import Router from 'express';
import QuoteModel from '../model/QuotleModel.js';
import validateGetQuote from '../middleware/validateGetQuote.js';
const router = Router();

router.get('/quote', validateGetQuote, async (req, res) => {
    try {
        const quote = await QuoteModel.getQuote(req.body.date)
        res.send(quote);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
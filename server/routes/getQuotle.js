import { Router} from 'express';
import QuoteModel from '../model/QuotleModel.js';
import validateGetQuote from '../middleware/validateGetQuote.js';
const router = Router();

router.get('/quote', validateGetQuote, async (req, res) => {
    console.log('Quote Requested')
    try {
        const quote = await QuoteModel.getQuote(req.params.date)
        res.send(quote);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;

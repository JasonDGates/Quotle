import { Router } from 'express';
import QuoteModel from '../model/QuotleModel.js';
import validateGetQuote from '../middleware/validateGetQuote.js';

const router = Router();

router.get('/quote', validateGetQuote, async (req, res) => {
    console.log('Quote Requested with Date:', req.query.date);
    try {
        const quote = await QuoteModel.findOne({ date: req.query.date });

        if (!quote) {
            // Handle the case where no document is found
            return res.status(404).send({ error: 'Quote not found for the provided date' });
        }

        res.send(quote);
    } catch (error) {
        console.error('Error retrieving quote:', error.message);
        res.status(500).send({ error: 'Internal server error' });
    }
});

export default router;

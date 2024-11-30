import { Router } from "express";
import QuoteModel from "../model/QuotleModel";
import validateCreateQuote from "../middleware/validateCreateQuote"

const router = Router();

routner.post ('/quote', validateCreateQuote, async (req, res) => {
    const quote = req.body;
    try {
        const existingQuote = await QuoteModel.findOne({ date: quote.date })
        if (existingQuote) { 
            return res.status(409).json({error: 'Quote for this date already exists'})
        }
        const newQuote = await QuoteModel.create(quote); 
        res.status(201).send({message: 'New quote created: ', newQuote});
    } catch (error) {
        console.error('Error creating quote: ', error);
        res.status(500).send({ error: 'Internal server error' });
    }
})

export default createQuote;
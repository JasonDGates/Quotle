import Router from 'express';

const router = Router();

router.get('/quote', async (req, res) => {
    try {
        const quote = await QuoteModel.getQuote(req.body)
        res.send(quote);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
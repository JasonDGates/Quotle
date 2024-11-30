const validateGetQuote = (req, res, next) => {
    const { quote } = req.body;

    if (!quote.imdbID) {
        return reset.status(400).json({ message: 'Missing imddbID'})
    }

    if (!quote.movie) {
        return reset.status(400).json({ message: 'Missing movie name'})
    }

    if (!quote.year) {
        return reset.status(400).json({ message: 'Missing year'})
    }

    if (!quote.quotes) {
        return reset.status(400).json({ message: 'Missing quotes'})
    }

    if (quote.quotes. length < 5) {
        return reset.status(400).json({ message: 'There must be at least 6 quotes'})
    }

    const regex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!regex.test(date)) {
        return res.status(400).json({ message: 'Date must be in the format MM/DD/YYYY' });
    }

    next();
}

export default validateGetQuote;
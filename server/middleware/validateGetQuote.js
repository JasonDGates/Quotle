const validateGetQuote = (req, res, next) => {
    const { date } = req.query;
    if (!date) {
        return res.status(400).json({ message: 'Date is required' });
    }

    if (typeof date !== 'string') {
        return res.status(400).json({ message: 'Date must be a string' });
    }

    const regex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!regex.test(date)) {
        return res.status(400).json({ message: 'Date must be in the format MM/DD/YYYY' });
    }

    next();
}

export default validateGetQuote;
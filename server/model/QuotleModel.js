import mongoose from 'mongoose';

const QuoteSchema = new mongoose.Schema({
    date: {type: String, required: true},
    id: {type: Number, required: true},
    imdbID: {type: String, required: true},
    title: {type: String, required: true},
    year: {type: Number, required: true},
    quotes: {type: Array, required: true}
})
const QuoteModel = mongoose.model('Quotes', QuoteSchema)

export default QuoteModel;
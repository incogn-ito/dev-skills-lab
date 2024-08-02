import mongoose from 'mongoose'

const Schema = mongoose.Schema

const toySchema = new Schema({
  toy: String,
  price: Number,
})

const Toy = mongoose.model('Toy', toySchema)

export {
  Toy
}
const mongoose = require('mongoose')
const { Schema } = mongoose

const reviewsSchema = new Schema(
  {
    note: {
      type: String,
      required: Number
    },
    comment: {
      type: String
    },
    thème: {
      type: String
    },
    client : {
        type: String
    },
    guest: {
      type: String
    },
    created_at: {
      type: Date
    },
    updated_at: {
      type: Date
    },
    
  },
  { timestamps: true }
)

module.exports = mongoose.model('Reviews', reviewsSchema)
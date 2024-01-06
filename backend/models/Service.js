const mongoose = require("mongoose")

const { Schema } = mongoose

const serviceSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
})

const Service = mongoose.model("Service", serviceSchema)

module.exports = {
    Service,
    serviceSchema,
}
const mongoose = require("mongoose")

const {Schema} = mongoose

const {servicesSchema} = require("./Service")

const partySchema = new Schema ({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    }
})

const Party = mongoose.model("Party", partySchema)

module.exports = Party;
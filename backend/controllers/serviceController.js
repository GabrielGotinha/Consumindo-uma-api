const {Service: ServiceModel} = require("../models/Service")

const serviceController = {
    create: async (req, res) => {
        try {
            
            const service = {
                title: req.body.title,
                description: req.body.description,
                content: req.body.content
            }

            const response = await ServiceModel.create(service)

            res.status(201).json({ response, msg: "Enviado"})

        } catch (error) {
            console.log(error)
        }
    },

    getAll: async (req, res) =>{
        try {
            const services = await ServiceModel.find()

            res.json(services)
        } catch (error) {
            console.log(error)
        }
    },

    get: async(req, res) => {
        try {
            const id = req.params.id

            const service = await ServiceModel.findById(id)

            if(!service){
                res.status(404).json({ msg: "serviço nao encontrado"})
                return;
            }


            res.json(service)

        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) =>{
        try {
            const id = req.params.id
            const service = await ServiceModel.findById(id)

            const deleteService = await ServiceModel.findByIdAndDelete(id)

            res.status(200).json({deleteService, msg:"Servico deletado"})

        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) =>{

        const id = req.params.id 

        const service = {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content
        };

        const updatedService = await ServiceModel.findByIdAndUpdate(id, service)

        if(!updatedService){
            res.status(404).json({ msg: "serviço nao encontrado"})
            return;
        }

        res.status(200).json({service, msg: "Servico Atulizado com sucesso"})
    }
}

module.exports = serviceController
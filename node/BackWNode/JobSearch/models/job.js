const {mongoose} = require("../config/db")

const Schema = mongoose.Schema


const jobSchema = new Schema({
        email:String,
        titulo:String,
        categoria:[String],
        descripcion:String,
        salario:Number,
        ciudad:String,
        modo:String,
        postulantes:[String],
        modo:{
            type:['Presencial', 'Remoto', 'Flexible'],
            default: 'Presencial'
        },
        date: { type: Date, default: Date.now }
    }
)

const JobModel = mongoose.model("Jobs",jobSchema)
module.exports = JobModel
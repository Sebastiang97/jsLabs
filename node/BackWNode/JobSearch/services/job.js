const JobModel = require("../models/job")

class Jobs{
    async getAll(){
        try{
            const jobs = await JobModel.find()
            // Ya tenemos disponubles los datos

            return jobs // Array de objetos
        }catch(error){
            console.log("error"+error)
        }
    }

    async getByCategory(category){
        try{
            const jobs = await JobModel.find({ categoria: category }).exec();
            // Ya tenemos disponubles los datos

            return jobs // Array de objetos
        }catch(error){
            console.log("error"+error)
        }
    }

    async getByCity(city){
        try{
            const jobs = await JobModel.find({ ciudad: city }).exec();
            // Ya tenemos disponubles los datos

            return jobs // Array de objetos
        }catch(error){
            console.log("error"+error)
        }
    }

    async getBySalaryGreater(salary){
        try{
            const jobs = await JobModel.find( { salario: { $gte: salary} } )
            // Ya tenemos disponubles los datos

            return jobs // Array de objetos
        }catch(error){
            console.log("error"+error)
        }
    }

    async getBySalaryLower(salary){
        try{
            const jobs = await JobModel.find( { salario: { $lte: salary} } )
            // Ya tenemos disponubles los datos

            return jobs // Array de objetos
        }catch(error){
            console.log("error"+error)
        }
    }
    
    async create(data){
        // try{
            const job = await JobModel.create(data)
            return job // Objeto
        // }catch(error){
        //     if(error.code===11000){
        //         const message = `El correo "${error.keyValue.email}" ya está en uso`
        //         return {
        //             error:true,
        //             message
        //         }
        //     }
        // }
    }

    async update(id,data){
        try{
            const job = await JobModel.findByIdAndUpdate(id,data,{new:true})
            // Ya tenemos disponibles los datos

            return job // Objeto
        }catch(error){
            console.log(error)
        }
    }

    async delete(id){
        try{
            const job = await JobModel.findByIdAndDelete(id)
            // Ya tenemos disponibles los datos

            return job // Objeto
        }catch(error){
            console.log(error)
        }
    }

}

module.exports = Jobs
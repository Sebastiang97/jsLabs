const express = require("express")
const authValidation = require("../middleware/authValidation")
const JobService = require("../services/job")

function jobs(app){
    const router = express.Router()
    const jobServ = new JobService()

    app.use("/api/jobs",router)

    router.get("/", ...authValidation('employer'), async (req,res)=>{
        const jobs = await jobServ.getAll() // Array de usuarios

        return res.json(jobs)
    })

    router.get("/category/:category", async (req,res)=>{
        const jobs = await jobServ.getByCategory(req.params.category) // Array de usuarios

        return res.json(jobs)
    })

    router.get("/city/:city", async (req,res)=>{
        const jobs = await jobServ.getByCity(req.params.city) // Array de usuarios

        return res.json(jobs)
    })

    router.get("/salaryht/:salary", async (req,res)=>{
        const jobs = await jobServ.getBySalaryGreater(req.params.salary) // Array de usuarios

        return res.json(jobs)
    })

    router.get("/salarylt/:salary", async (req,res)=>{
        const jobs = await jobServ.getBySalaryLower(req.params.salary) // Array de usuarios

        return res.json(jobs)
    })

    router.post("/",async (req,res)=>{
        const job = await jobServ.create(req.body)
        return res.json(job)
    })
    router.put("/:id",async (req,res)=>{
        const job = await jobServ.update(req.params.id,req.body)
        return res.json(job)
    })
    router.delete("/:id",async (req,res)=>{
        const job = await jobServ.delete(req.params.id)
        return res.json(job)
    })
}

module.exports = jobs
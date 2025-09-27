import express from 'express'

export default function createStudentRouter (studentModel){
    const router = express.Router()

    router.get("/", async (req, res)=>{
        const students = await studentModel.findAll()
        res.json(students)
    })

    router.post('/', async (req, res)=>{
        const student = req.body
        await studentModel.create(student)
        return res.send().status(201)
    })

    router.get('/:id', async (req, res)=>{
        const id = req.params.id
        const student = await studentModel.findByPk(id)
        res.json(student)
    })
    router.put('/:id', async(req, res)=>{
        const id = req.params.id
        const updated = req.body
        const student = await studentModel.findByPk(id)
        student.update({
            name: updated.name,
            code: updated.code,
            career: updated.career
        })
        res.status(204)
        res.send()
    })
    router.delete('/:id', async (req, res)=>{
        const id = req.params.id
        const student = await studentModel.findByPk(id)
        if (student){
            student.destroy()
        }
        res.status(204)
        res.send()p
        
    })
    return router
}
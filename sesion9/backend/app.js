import express from 'express'
import { Sequelize } from 'sequelize';
import createStudentRouter from './routes/student.js'
import StudentFactory from './models/student.js'
import {Teacher, TeacherSubject} from './models/teacher.js'
import cors from 'cors'
const app = express();

app.use(express.json())
//Peligroso habilita para todos los dominios, en produccion se debe configurar
//solo los permitodos.
app.use(cors())

const storagePath = process.env.NODE_ENV === 'test' ? ':memory:' : './school.sqlite';
const sequelize = new Sequelize({ dialect: 'sqlite', storage: storagePath });
const studentModel = StudentFactory(sequelize, Sequelize.DataTypes);

//Crea o actualiza las tablas pendientes.
await sequelize.sync();


app.use("/student", createStudentRouter(studentModel))

export default app;
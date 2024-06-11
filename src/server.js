import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(`/`, express.static(path.join(__dirname, "..")))
app.use(express.urlencoded({ extended: false }))

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.TRANSPORTER_USER,
        pass: process.env.TRANSPORTER_PASSWORD
    }
})

app.get('/api', (req, res) => {
    res.send("Hola desde la API!");
});

app.post('/form', async (req, res) => {
    try {
        const formData = req.body
        console.log(formData)
        
        const info = await transporter.sendMail({
            from: `Mensaje recibido de: ` + formData.nombreCompleto,
            to: 'santioldani08@gmail.com',
            subject: "Consulta",
            text: "Consulta: " + formData.consulta + "\nNumero de telefono: " + formData.telefono + "\nNombre y apellido: " + formData.nombreCompleto
        })

        if(!info.error){
            res.send('Mensaje enviado')
        }else{
            console.log(info.error)
            res.send(info.error)
        }


    } catch (error) {
        res.send(error.message)
    }
})

transporter.verify().then(() => {
    console.log('Listo para enviar correo electronico')
})

app.listen(3001, () => {
    console.log("Escuchando desde puerto 3001")
})
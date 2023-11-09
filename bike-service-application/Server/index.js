const express=require('express');
const {db}=require('./db')
var cors=require('cors')

const userRoute=require("./routes/userRoute")
const serviceRoute=require('./routes/servicesRoute')
const bookingRoute=require('./routes/bookingRoute');
const {sendMail}=require('./controllers/mailController');

const app=express();

app.use(express.json())
app.use(cors())

app.get("/api", (req, res) => {res.status(200).json({message: "App is ready to serve ✨"});})
app.use('/api/user', userRoute)
app.use('/api/service', serviceRoute)
app.use('/api/booking', bookingRoute)
app.post('/api/sendmail', sendMail)

const port = process.env.port || 5000
app.listen(port, () => { console.log(`Server is listening to port ${port} 😉`)})
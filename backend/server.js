const express = require("express");
const dotenv = require("dotenv").config();
const connectedDb = require("./config/connectedDb");
const taskRoutes = require("./routes/taskRouter.js")
const cors = require("cors")


const app = express();


//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors({
    origin : ["http://localhost:3000" , "https://mern-task-app-j94w.onrender.com"]
}))


app.get("/" , async (req,res)=>{
    res.status(200).send("Home Page");
})

app.use("/api/tasks" , taskRoutes)




const PORT = process.env.PORT || 5000;


const startServer = async()=>{
    try {
        await connectedDb()
        app.listen(PORT , ()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}
startServer();



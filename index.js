const express= require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")

const tempelatepath=path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatepath)
app.use(express.urlencoded({extended:false}))



app.get("/",(req,res)=>{
    res.render("signup")

})

app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    };

    try {
   const result = await collection.insertMany([data]);
    console.log("Data inserted:", result);
    res.redirect("https://6545cf6b5f288e3b6505ddb2--stalwart-kashata-3b77b2.netlify.app/ ");
    } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).send("Error occurred while signing up.");
    }
});




app.listen(3000,()=>{
    console.log("port connected");
})

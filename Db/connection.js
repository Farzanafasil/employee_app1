const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://farzanaycet2009:AtlasFarzana@cluster0.fqfy5gs.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("connected to DB")
}).catch(()=>{
    console.log("error!!! Connection Lost")
})
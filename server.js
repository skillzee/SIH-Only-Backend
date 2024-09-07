const app = require("./app.js").app
const dbConnect = require("./DataBase/database.js").dbConnect



const port = process.env.PORT || 5000



dbConnect();
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})

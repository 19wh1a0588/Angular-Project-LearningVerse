let express = require('express');
let bodyparser=require('body-parser');
let cors=require("cors");
let app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());
app.use("/login",require("./login/login"));
app.use("/register",require("./register/register"));
app.use("/insert_com",require("./insert_com/insert_com"));
app.use("/insert_cpp_com",require("./insert_cpp_com/insert_cpp_com"));
app.use("/fetch_com",require("./fetch_com/fetch_com"));
app.use("/fetch_cpp",require("./fetch_cpp/fetch_cpp"));
app.use("/fetch_c",require("./fetch_c/fetch_c"));
app.use("/insert_c",require("./insert_c/insert_c"));
app.use("/fetch_dis",require("./fetch_dis/fetch_dis"));
app.use("/insert_dis",require("./insert_dis/insert_dis"));
// app.use("/index",require("./index/index"));
// app.use("/delete",require("./delete/delete"));
app.use("/fetch",require("./fetch/fetch"));
app.listen(3000);
console.log("server listening the port no.3000");
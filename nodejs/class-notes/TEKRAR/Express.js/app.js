"use strict";
/*---------------------------------------------------------*
                        EXPRESS.JS
/*---------------------------------------------------------*/

/* ExpressJS Start*/

const express = require("express"); // Assing express Framework to express variable
const app = express(); // Run application on express

/* ENV */
require("dotenv").config();
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8000;
/*---------------------------------------------------------*/
/* HTTp_Methods & URLs *
// app.get('/',(req,res)=>{
//     //? run response.send for print-out
//     // res.send('Welcome to Express')
//     res.send({
//         message: 'called in "get" method'
//     })
// app.post('',(req,res)=>res.send({message:'called in "post" method'}))
// app.put('',(req,res)=>res.send({message:'called in "put" method'}))
// app.delete('',(req,res)=>res.send({message:'called in "delete" method'}))
//? allow at all methods:
// app.all('/',(req,res)=>res.send({message: 'at all option allows to all methods'}))

//? app.route('url')

app.route('/')
.get((req,res)=>res.send('get'))
.post((req,res)=>res.send('post'))
.put((req,res)=>res.send('put'))
.delete((req,res)=>res.send('delete'))
/*---------------------------------------------------------*/
/*//? URL options */
// app.get('/',(req,res)=>res.send('in "root" path')) // '/' == root
// app.get('/path',(req,res)=>res.send('in  "path"')) // '/path' == '/path/'
// app.get('/abc(x?)123',(req,res)=>res.send('in  "abcX?123"')) // abc123 or abcx123
// app.get('/abc(x*)123',(req,res)=>res.send('in  "abcX*123"')) // abc123 or abc....123
// app.get('/abc(x+)123',(req,res)=>res.send('in  "abcX*123"')) // abcx123 or abcxx ..xx123
// app.get('/abc*123',(req,res)=>res.send('in  "abcX*123"')) // abc123 or abc....123 //  abc(Any)123
//? express-urls supported regexp:
// app.get(/xyz/,(req,res)=>res.send('regexp "/xyz/"') // url contains = 'xyz'(no limit for subPath)
// app.get(/^\/xyz/,(req,res)=>res.send('regexp "/^xyz/"')) // startswith = 'xyz'
// app.get(/xyz$/,(req,res)=>res.send('regexp "/xyz$/"')) // endswith = 'xyz'
/*---------------------------------------------------------*/
/* //? URL Parameters {req.params} */
// /user/99/config/update/any
// app.get('/user/:userId/config/:configParam/*',(req,res)=>{
//     res.send({
//         userId:req.params.userId,
//         configParam: req.params.configParam,
//         url: {
//             protocol: req.protocol,
//             subdomains: req.subdomains,
//             hostname: req.hostname,
//             baseUrl :req.baseUrl,
//             params: req.params,
//             query: req.query,
//             path: req.path,
//             originalUrl: req.originalUrl,
//         }
//     })
// })
//? '\d' means only-digit-chars in regexp:
//? '\w' means only-chars in regexp:
// app.get('/user/:userId([0-9])',(req,res)=>{
// app.get('/user/:userId(\\d+)',(req,res)=>{
//     res.send({
//         params: req.params,
//     })
// })
// app.get('/command/:userId-:profileId(\\d+)',(req,res)=>{
//     res.send({
//         params: req.params,
//     })
// })
/*---------------------------------------------------------*/
/*//? Response Methods */
//? SendStatus:
// app.get('/',(req,res)=>res.sendStatus(200))
//? Status:
// app.get('/',(req,res)=>res.status(200).send({message: 'OK'}))
// app.post('/',(req,res)=>res.status(201).send({message: 'Created'}))
// app.put('/',(req,res)=>res.status(202).send({message: 'Accepted'}))
// app.delete('/',(req,res)=>res.status(204).send({message: 'No Content'}))
//? JSON(.send() method already does this converting.)
// app.get('/',(req,res)=>res.json([{key: 'value'}]))
//? Dowload File (Dowload at browser)
// app.get('/download',(req,res)=>res.download('app.js', 'changedName.js'))
//? SendFile Content:
// app.get('/file',(req,res)=>res.sendFile(__dirname + '/app.js')) // FilePath must be realPath
//? Redirect
app.get('/google',(req,res)=>res.redirect(302, 'https://google.com')) ;








/*---------------------------------------------------------*/
// app.listen(PORT,()=>console.log(`Running on http://127.0.0.1:${PORT}`))
app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`));
/*---------------------------------------------------------*/

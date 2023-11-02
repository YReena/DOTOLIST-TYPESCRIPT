import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.json());
require('./db/conn');
app.use(require('./Router/route'));

app.use(cors());

app.listen(9000, ():void=>{
    console.log("hellow form server side");
})
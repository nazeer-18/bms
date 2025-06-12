import express from 'express';
import {client} from '@repo/db/client';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the HTTP server!');
});

app.post('/signup',async(req,res) =>{
    const userName = req.body.userName;
    const password = req.body.password;
    const user = await client.user.create({
        data:{
            userName,
            password
        }
    })
    res.json({
        message: "signup successful",
        id : user.id
    })
});

app.listen(3002);
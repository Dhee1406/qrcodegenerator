import express from "express";
import ejs from "ejs";
import qrcode from "qrcode";
import path from "path";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended:false}));

app.set('view engine', 'ejs');
app.set('views', path.join('view'));

app.use(express.static('public'));

app.get('/',(req, res, next) => {
    res.render('index');
})
app.post('/scan',(req, res, next) =>{
    const input_text = req.body.text;
    console.log(input_text);
    qrcode.toDataURL(input_text,(err, src) => {
        res.render('scan',{
           qr_code: src
        });
    })
})
app.listen(port, console.log("Listening on port",port));
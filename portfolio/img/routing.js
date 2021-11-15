var express = require('express');
var router = express.Router();
router.get('/',(req,res)=>
{
    res.sendFile(__dirname + '/' + 'portfilo.html' );
});
router.get('/whatsapp',(req,res)=>
{
    res.redirect("https:wa.me/918072696278");
});
module.exports = router;
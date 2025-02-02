/*
GEREKLİ PAKETLER YÜKLENİYOR...
*/
var http = require('http');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3005); // GİRİŞ PORTU AYARLANDI
app.set('views', __dirname + '/app/server/views'); // VIEW KLASÖRÜ TANITILDI
app.set('view engine', 'ejs'); // VIEW ENGINE AYARLANDI
app.use(express.static(__dirname + '/app/public')); // KULLANICILAR TARAFINDAN ERİŞİLEBİLEN KLASÖR TANIMLANDI

require('./app/routes')(app); // ROUTE DOSYASI ÇAĞIRILDI

// "Hello World" mesajını döndüren root route eklendi
app.get('/', function (req, res) {
    res.send('Hello World');
});

/*
HTTP SERVER OLUŞTURULDU
*/
http.createServer(app).listen(app.get('port'), function () {
    console.log('undertaker ' + app.get('port') + ' john cena.');
});

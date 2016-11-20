var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'home.html'));
});
app.get('/ui/main.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.html'));
});
app.get('/ui/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});
app.get('/ui/Bill Payments.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Bill Payments.html'));
});
app.get('/ui/Channels.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Channels.html'));
});
app.get('/ui/Health.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Health.html'));
});
app.get('/ui/Indian Government Sites.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Inian Government Sites.html'));
});
app.get('/ui/songs.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'songs.html'));
});
app.get('/ui/airways.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'airways.html'));
});
app.get('/ui/food.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'food.html'));
});
app.get('/ui/osh.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'osh.html'));
});
app.get('/ui/railways.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'railways.html'));
});
app.get('/ui/sbi.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sbi.html'));
});
app.get('/ui/social networking.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'social networking.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/tree.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tree.jpg'));
});
app.get('/ui/bills.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bills.png'));
});
app.get('/ui/food.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'food.png'));
});
app.get('/ui/links/health.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'health.png'));
});
app.get('/ui/i.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'i.png'));
});
app.get('/ui/indian train.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'indian train.png'));
});
app.get('/ui/li.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'li.png'));
});
app.get('/ui/online shop.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'online shop.png'));
});
app.get('/ui/plane icon.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'plane icon.jpg'));
});
app.get('/ui/sn.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sn.jpg'));
});
app.get('/ui/songs icon.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'songs icon.jpg'));
});
app.get('/ui/links/tv icon.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tv icon.jpg'));
});
app.get('/ui/gov.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gov.jpg'));
});
app.get('/ui/sbi icon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sbi icon.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

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
app.get('/ui/bp.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bp.html'));
});
app.get('/ui/Channels.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Channels.html'));
});
app.get('/ui/Health.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Health.html'));
});
app.get('/ui/IndianGovernment.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IndianGovernment.html'));
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
app.get('/ui/socialnetworking.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'socialnetworking.html'));
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
app.get('/ui/health.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'health.png'));
});
app.get('/ui/i.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'i.png'));
});
app.get('/ui/train.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'train.png'));
});
app.get('/ui/li.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'li.png'));
});
app.get('/ui/os.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'os.png'));
});
app.get('/ui/plane.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'plane.jpg'));
});
app.get('/ui/sn.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sn.jpg'));
});
app.get('/ui/songs.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'songs.jpg'));
});
app.get('/ui/tv.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tv.jpg'));
});
app.get('/ui/gov.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gov.jpg'));
});
app.get('/ui/sbi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sbi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

/*
 * battleapi.herokuapp.com
 * github.com/01mu
 */

const express = require('express');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

const app = express();

const resInclude = require('./res');

const baseURL = 'https://smallfolio.bitnamiapp.com/bars/';

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get('/battler/:artist/:league', function (req, res, next) {
    const artist = req.params.artist;
    const league = req.params.league;

    var end = 'battler.php?artist=' + artist +'&league=' + league;
    var url = baseURL + end;

    resInclude.showResult(https, url, res);
});

app.get('/battle/:id', function (req, res, next) {
    const id = req.params.id;

    var end = 'battle.php?id=' + id;
    var url = baseURL + end;

    resInclude.showResult(https, url, res);
});

app.get('/battlers/:league', function (req, res, next) {
    const league = req.params.league;

    var end = 'battlers.php?league=' + league;
    var url = baseURL + end;

    resInclude.showResult(https, url, res);
});

app.get('/battles/:league', function (req, res, next) {
    const league = req.params.league;

    var end = 'battles.php?league=' + league;
    var url = baseURL + end;

    resInclude.showResult(https, url, res);
});

app.get('/leagues', function (req, res, next) {
    const league = req.params.league;

    var end = 'leagues.php';
    var url = baseURL + end;

    resInclude.showResult(https, url, res);
});

app.get('*', function(req, res){
  res.send(' ', 404);
});


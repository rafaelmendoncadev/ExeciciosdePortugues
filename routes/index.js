var express = require('express');
var router = express.Router();

/* GET home page — redireciona para o exercício de classificação de verbos. */
router.get('/', function(req, res) {
  res.redirect('/classificacao-verbos.html');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {


  let products = [

    {
      name: "mac13",
      category: "laptop",
      description: "good lap",
      image: "https://tse4.mm.bing.net/th?id=OIP.mJoZa1PsbRwMosfIj9g24AHaHa&pid=Api&P=0&h=180"

    },
    {
      name: "samsung",
      category: "Mobile",
      description: "good phone",
      image: "https://tse2.mm.bing.net/th?id=OIP.eLNqnWpY4PL8b0oWWuNZtAHaF5&pid=Api&P=0&h=180"

    },
    {
      name: "ipad",
      category: "Tablet",
      description: "good ipad",
      image: "https://tse1.mm.bing.net/th?id=OIP.lTUueqlva0wZZw7m-icpkQHaIr&pid=Api&P=0&h=180"

    },

    {
      name: "Airpods161",
      category: "headset",
      description: "good head set",
      image: "https://tse4.mm.bing.net/th?id=OIP.yaShNLsdRpzwIKOQjaiAwQHaEa&pid=Api&P=0&h=180"

    }

  ]






  res.render('index', { products,admin:true });
});

module.exports = router;


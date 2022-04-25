const express = require('express')
const port = 1337;
const path = require('path');
const app = express();

const routes = require("./routes");

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());

const { engine } = require ('express-handlebars');
app.engine('hbs', engine({ 
 	extname: 'hbs', 
 	defaultLayout: 'main', 
 	layoutsDir: __dirname + '/views/layouts/',
 	partialsDir: __dirname + '/views/partials/',
	helpers: require('./config/hbs-helpers')
}));
app.set('view engine', 'hbs');
app.set("views", "./views");
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', urlencodedParser, routes);
app.listen(port);

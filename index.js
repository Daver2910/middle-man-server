const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const cors = require('cors');
const _ = require('lodash');
const moment = require('moment');
const port  = 2002;

app.use(bodyParser.json());
app.use(cors());

const routes = require('./routes');
const VARS = require('./variables');

require('./router/index')(app, axios, routes, VARS);



app.listen(port, () => console.log(`App started on http://localhost:${port}`));

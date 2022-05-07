import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import route from './routes/route.js';
import connect from './config/db/config.js'
import methodOverride from 'method-override';

const app = express()
const port = 3001

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//connect to DB
connect()

//http logger
app.use(morgan("combined"))
app.use(methodOverride('_method'))
//static file
app.use(express.static(path.join(__dirname, 'public/')))
app.use(express.urlencoded({ extended: true, }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
//view engine
app.engine('hbs', engine({
  extname: 'hbs',
  helpers: {
    sum: (a,b) => a+b,
  },
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); //'resources/views'

//Routes
route(app)

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
)
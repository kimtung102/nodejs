import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express()
const port = 3001

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//http logger
app.use(morgan("combined"))

//view engine
app.engine('hbs', engine({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port)
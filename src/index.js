import app  from './app';
import './datebase'
import { PORT } from './config'

app.listen(PORT)
console.log("Server on port", PORT);

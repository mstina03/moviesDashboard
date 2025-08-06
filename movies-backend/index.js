import express from 'express';
import cors from 'cors';
import users from './users.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/users', users);                // localhost:5050/users
app.get('/', (req, res) => {             // localhost:5050
    res.send('howdy')
});
app.listen(5050, () => {
    console.log('listening at http://localhost:5050');
});
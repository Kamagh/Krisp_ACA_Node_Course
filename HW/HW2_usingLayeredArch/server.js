import express from 'express';
import dotenv from 'dotenv';
import tasksRoutes from './routers/tasks.router.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 7701;

app.get('/',(req, res) => {
    res.json({
        message: "Hello"
    })
})

app.use(express.json());

app.use('/api/tasks', tasksRoutes);


app.listen(port, () => console.log(`Server listen at ${port}`));
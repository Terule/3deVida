import express, { type Request, type Response } from 'express';
import UserRouter from './routes/UserRouter';
import TableRouter from './routes/TableRouter';
import PostRouter from './routes/PostRouter';

const userRouter = new UserRouter();
const tableRouter = new TableRouter();
const postRouter = new PostRouter();

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => res.status(200).json('Tudo certo por aqui!'));

app.use('/user', userRouter.router);
app.use('/table', tableRouter.router);
app.use('/post', postRouter.router);

export default app;

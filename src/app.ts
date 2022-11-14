import express, { NextFunction, Request, Response } from 'express';

import todoRoutes from './routes/todos';

const app = express();
app.use(express.json());

// ルーティングの追加
app.use('/todos', todoRoutes);

// エラー処理のミドルウェア関数を追加
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // console.error(err);
  res.status(500).json({ message: err.message });
});

app.listen(3000);

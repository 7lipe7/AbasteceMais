import express from 'express';
import type { ErrorRequestHandler } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env';
import { HttpError, naoEncontrado } from './lib/httpError';
import { healthRouter } from './routes/health';

/** Cria e configura a aplicação Express (sem escutar porta). */
export function createApp() {
  const app = express();

  // Segurança e leitura de JSON no corpo das requisições
  app.use(helmet());
  app.use(cors({ origin: env.corsOrigin }));
  app.use(express.json());

  // Rotas da API
  app.use('/health', healthRouter);

  // Qualquer requisição que chegue aqui não bateu em rota → 404
  app.use((_req, _res, next) => {
    next(naoEncontrado('Rota não encontrada'));
  });

  // Middleware central de erro — precisa SEMPRE ser o último.
  // Repare nos 4 parâmetros: é isso que o Express usa pra reconhecê-lo.
  const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    if (err instanceof HttpError) {
      res.status(err.status).json({ error: err.message });
      return;
    }

    // Erro inesperado: loga no servidor e não vaza detalhes pro cliente
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  };
  app.use(errorHandler);

  return app;
}

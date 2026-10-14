import { config } from 'dotenv';

// Carrega variáveis de ambiente do arquivo .env (se existir).
config();

function numero(name: string, padrao: number): number {
  const bruto = process.env[name];
  if (!bruto) return padrao;
  const valor = Number(bruto);
  return Number.isFinite(valor) ? valor : padrao;
}

/** Configuração central da API, lida das variáveis de ambiente. */
export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  isTest: (process.env.NODE_ENV ?? '') === 'test',
  port: numero('PORT', 3333),
  databaseUrl: process.env.DATABASE_URL ?? '',
  corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
  migrationsDir: process.env.MIGRATIONS_DIR ?? '',
};

/** Garante que há uma string de conexão antes de tocar no banco. */
export function exigirDatabaseUrl(): string {
  if (!env.databaseUrl) {
    throw new Error(
      'DATABASE_URL não definido. Configure a conexão do PostgreSQL no arquivo .env.',
    );
  }
  return env.databaseUrl;
}

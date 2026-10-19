import { describe, it, expect } from 'vitest'; 
import request from 'supertest';
import { createApp } from '../app';

const app = createApp();

describe('GET /health', () => {
  it('deve responder 200 com status ok', async () => {
    const resposta = await request(app).get('/health');

    expect(resposta.status).toBe(200);
    expect(resposta.body).toMatchObject({
      status: 'ok',
      service: 'abastecemais-api',
    });
    expect(typeof resposta.body.timestamp).toBe('string');
  });

  it('deve responder 404 para rota inexistente', async () => {
    const resposta = await request(app).get('/rota-que-nao-existe');

    expect(resposta.status).toBe(404);
    expect(resposta.body).toEqual({ error: 'Rota não encontrada' });
  });
});

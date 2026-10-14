/**
 * Erro de domínio com status HTTP associado.
 * Usado para sinalizar respostas de erro previsíveis (validação, não encontrado,
 * conflito, não autorizado) que serão tratadas pelo middleware de erro.
 */
export class HttpError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export const naoEncontrado = (mensagem = 'Recurso não encontrado') =>
  new HttpError(404, mensagem);

export const dadoInvalido = (mensagem = 'Dados inválidos') =>
  new HttpError(400, mensagem);

export const conflito = (mensagem = 'Conflito de dados') =>
  new HttpError(409, mensagem);

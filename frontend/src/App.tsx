import { useState } from 'react';
import { CompararCombustiveis } from './comparator/fuelCalc';

/** Converte o texto do input em número válido (> 0) ou null. */
function parsePositivo(valor: string): number | null {
  if (valor.trim() === '') return null;
  const numero = Number(valor);
  return Number.isFinite(numero) && numero > 0 ? numero : null;
}

/** Formata um número como moeda brasileira (R$). */
function brl(valor: number): string {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function App() {
  const [gasolinaPrecoLitro, setGasolinaPrecoLitro] = useState('');
  const [ethanolPrecoLitro, setEthanolPrecoLitro] = useState('');
  const [gasolinaKmPorLitro, setGasolinaKmPorLitro] = useState('');
  const [ethanolKmPorLitro, setEthanolKmPorLitro] = useState('');

  const gasolinaPreco = parsePositivo(gasolinaPrecoLitro);
  const ethanolPreco = parsePositivo(ethanolPrecoLitro);
  const gasolinaConsumo = parsePositivo(gasolinaKmPorLitro);
  const ethanolConsumo = parsePositivo(ethanolKmPorLitro);

  const resultado =
    gasolinaPreco !== null &&
      ethanolPreco !== null &&
      gasolinaConsumo !== null &&
      ethanolConsumo !== null
      ? CompararCombustiveis({
        gasolinaPrecoLitro: gasolinaPreco,
        ethanolPrecoLitro: ethanolPreco,
        gasolinaKmPorLitro: gasolinaConsumo,
        ethanolKmPorLitro: ethanolConsumo,
      })
      : null;

  const melhorRotulo =
    resultado?.MelhorCombustivel === 'ethanol' ? 'Etanol' : 'Gasolina';

  return (
    <main className="app">
      <h1>AbasteceMais</h1>
      <p className="subtitulo">
        Compare etanol e gasolina e descubra qual compensa mais.
      </p>

      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="campo">
          <label htmlFor="gasolinaPreco">Preço da gasolina (R$/L)</label>
          <input
            id="gasolinaPreco"
            type="number"
            min="0"
            step="0.01"
            inputMode="decimal"
            placeholder="5.00"
            value={gasolinaPrecoLitro}
            onChange={(e) => setGasolinaPrecoLitro(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="ethanolPreco">Preço do etanol (R$/L)</label>
          <input
            id="ethanolPreco"
            type="number"
            min="0"
            step="0.01"
            inputMode="decimal"
            placeholder="3.50"
            value={ethanolPrecoLitro}
            onChange={(e) => setEthanolPrecoLitro(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="gasolinaKm">Consumo com gasolina (km/L)</label>
          <input
            id="gasolinaKm"
            type="number"
            min="0"
            step="0.1"
            inputMode="decimal"
            placeholder="12"
            value={gasolinaKmPorLitro}
            onChange={(e) => setGasolinaKmPorLitro(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="ethanolKm">Consumo com etanol (km/L)</label>
          <input
            id="ethanolKm"
            type="number"
            min="0"
            step="0.1"
            inputMode="decimal"
            placeholder="8.5"
            value={ethanolKmPorLitro}
            onChange={(e) => setEthanolKmPorLitro(e.target.value)}
          />
        </div>
      </form>

      {resultado ? (
        <section className="resultado" aria-live="polite">
          <p className="destaque">
            Compensa mais abastecer com <strong>{melhorRotulo}</strong>
          </p>
          <p className="economia">
            Economia de {resultado.PercentualDeEconomia.toFixed(1)}% por km
          </p>

          <div className="tabela">
            <div className="linha">
              <span>Custo por km (gasolina)</span>
              <strong>{brl(resultado.gasolina.costPorKm)}</strong>
            </div>
            <div className="linha">
              <span>Custo por km (etanol)</span>
              <strong>{brl(resultado.ethanol.costPorKm)}</strong>
            </div>
            <div className="linha">
              <span>Custo a cada 100 km (gasolina)</span>
              <strong>{brl(resultado.gasolina.costPor100Km)}</strong>
            </div>
            <div className="linha">
              <span>Custo a cada 100 km (etanol)</span>
              <strong>{brl(resultado.ethanol.costPor100Km)}</strong>
            </div>
          </div>

          <p className="referencia">
            Preço de equilíbrio do etanol: {brl(resultado.equilibriumEthanolPrice)}
          </p>
          <p className="referencia">
            Regra prática dos 70% (referência): {brl(resultado.regraPraticaEthanol)}
          </p>
        </section>
      ) : (
        <p className="aviso">
          Preencha os quatro campos com valores maiores que zero para ver a
          comparação.
        </p>
      )}
    </main>
  );
}

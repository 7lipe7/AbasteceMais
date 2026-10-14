import { describe, it, expect } from 'vitest';
import {
  costPerKm,
  costPer100Km,
  equilibriumEthanolPreco,
  ruleOfThumbEthanolPrice,
  CompararCombustiveis,
} from './fuelCalc';

describe('costPerKm', () => {
  it('exporta as funções de cálculo', () => {
    expect(costPerKm).toBeTypeOf('function');
    expect(costPer100Km).toBeTypeOf('function');
    expect(equilibriumEthanolPreco).toBeTypeOf('function');
    expect(ruleOfThumbEthanolPrice).toBeTypeOf('function');
    expect(CompararCombustiveis).toBeTypeOf('function');
  });

  it('divide o preço por litro pelo consumo (km/l)', () => {
    // R$ 5,00 / 12 km/l = 0,4167 R$/km
    expect(costPerKm(5, 12)).toBeCloseTo(0.4167, 4);
  });
});

describe('costPer100Km', () => {
  it('é o custo por km multiplicado por 100', () => {
    // 5 / 12 = 0,4167 R$/km -> 41,667 R$/100km
    expect(costPer100Km(5, 12)).toBeCloseTo(41.6667, 4);
  });
});

describe('equilibriumEthanolPreco', () => {
  it('aplica P_eq = (P_gasolina x K_etanol) / K_gasolina', () => {
    // (5,00 x 8,5) / 12 = 3,5417
    expect(equilibriumEthanolPreco(5, 8.5, 12)).toBeCloseTo(3.5417, 4);
  });

  it('iguala ao preço da gasolina quando os consumos são iguais', () => {
    expect(equilibriumEthanolPreco(6, 11, 11)).toBeCloseTo(6, 8);
  });
});

describe('ruleOfThumbEthanolPrice', () => {
  it('retorna 70% do preço da gasolina', () => {
    expect(ruleOfThumbEthanolPrice(5)).toBeCloseTo(3.5, 8);
  });
});

describe('CompararCombustiveis', () => {
  it('escolhe o etanol quando ele é mais econômico por km', () => {
    // Gasolina: 5,00 / 12 = 0,4167 | Etanol: 3,00 / 8,5 = 0,3529 -> etanol vence
    const resultado = CompararCombustiveis({
      gasolinaPrecoLitro: 5,
      ethanolPrecoLitro: 3,
      gasolinaKmPorLitro: 12,
      ethanolKmPorLitro: 8.5,
    });

    expect(resultado.MelhorCombustivel).toBe('ethanol');
    expect(resultado.ethanol.costPorKm).toBeLessThan(resultado.gasolina.costPorKm);
  });

  it('escolhe a gasolina quando o etanol não compensa', () => {
    // Gasolina: 5,00 / 12 = 0,4167 | Etanol: 4,00 / 8 = 0,5 -> gasolina vence
    const resultado = CompararCombustiveis({
      gasolinaPrecoLitro: 5,
      ethanolPrecoLitro: 4,
      gasolinaKmPorLitro: 12,
      ethanolKmPorLitro: 8,
    });

    expect(resultado.MelhorCombustivel).toBe('gasoline');
    expect(resultado.gasolina.costPorKm).toBeLessThan(resultado.ethanol.costPorKm);
  });

  it('calcula a economia percentual do mais barato sobre o mais caro', () => {
    // (0,5 - 0,4167) / 0,4167 x 100 = 20%
    const resultado = CompararCombustiveis({
      gasolinaPrecoLitro: 5,
      ethanolPrecoLitro: 4,
      gasolinaKmPorLitro: 12,
      ethanolKmPorLitro: 8,
    });

    expect(resultado.PercentualDeEconomia).toBeCloseTo(20, 4);
  });

  it('devolve o preço de equilíbrio e a regra dos 70% baseados na gasolina', () => {
    const resultado = CompararCombustiveis({
      gasolinaPrecoLitro: 5,
      ethanolPrecoLitro: 3,
      gasolinaKmPorLitro: 12,
      ethanolKmPorLitro: 8.5,
    });

    expect(resultado.equilibriumEthanolPrice).toBeCloseTo(3.5417, 4);
    expect(resultado.regraPraticaEthanol).toBeCloseTo(3.5, 8);
  });
});


//  Tipos


export interface EntradaDeComparacao {
  gasolinaPrecoLitro: number; // preço da gasolina (R$/l)
  ethanolPrecoLitro: number;  // preço do etanol (R$/l)
  gasolinaKmPorLitro: number;    // consumo com gasolina (km/l)
  ethanolKmPorLitro: number;     // consumo com etanol (km/l)
}

export interface FuelCost {
  costPorKm: number;   // custo por km (R$/km)
  costPor100Km: number; // custo a cada 100 km (R$/100km)
}

export interface ComparisonResult {
  gasolina: FuelCost;
  ethanol: FuelCost;
  MelhorCombustivel : 'gasoline' | 'ethanol';  // qual compensa mais
  PercentualDeEconomia: number;            // quanto o mais caro é mais caro (%)
  equilibriumEthanolPrice: number;   // preço de equilíbrio do etanol (R$/l)
  regraPraticaEthanol: number;   // regra dos 70% (só referência)
}


//  Funções puras de cálculo


/** Custo por quilômetro = preço/litro ÷ consumo (km/l). */
export function costPerKm(precoPorLitro: number, kmPorLitro: number): number {
  return precoPorLitro / kmPorLitro;
}

/** Custo a cada 100 km rodados. */
export function costPer100Km(precoPorLitro: number, kmPorLitro: number): number {
  return costPerKm(precoPorLitro, kmPorLitro) * 100;
}

/**
 * Preço de equilíbrio do etanol (P_eq): o preço MÁXIMO do etanol que ainda
 * compensa versus a gasolina, considerando os consumos REAIS do veículo.
 *
 *   P_eq = (P_gasolina × K_etanol) / K_gasolina
 */
export function equilibriumEthanolPreco(
  gasolinaPreco: number,
  ethanolConsumo: number,
  gasolinaConsumo: number,
): number {
  return (gasolinaPreco * ethanolConsumo) / gasolinaConsumo;
}

/** Regra prática dos 70% (estimativa genérica — NÃO usa o consumo real). */
export function ruleOfThumbEthanolPrice(gasolinePrice: number): number {
  return gasolinePrice * 0.7;
}

/** Diferença percentual do mais caro sobre o mais barato (sempre >= 0). */
function percentMoreExpensive(cheaper: number, pricier: number): number {
  return ((pricier - cheaper) / cheaper) * 100;
}

/**
 * Compara etanol e gasolina e devolve todos os números + a decisão.
 * Regra central: MENOR custo por km = mais econômico.
 */
export function CompararCombustiveis(input: EntradaDeComparacao): ComparisonResult {
  const {
    gasolinaPrecoLitro,
    ethanolPrecoLitro,
    gasolinaKmPorLitro,
    ethanolKmPorLitro,
  } = input;

  const gasolina: FuelCost = {
    costPorKm: costPerKm(gasolinaPrecoLitro, gasolinaKmPorLitro),
    costPor100Km: costPer100Km(gasolinaPrecoLitro, gasolinaKmPorLitro),
  };

  const ethanol: FuelCost = {
    costPorKm: costPerKm(ethanolPrecoLitro, ethanolKmPorLitro),
    costPor100Km: costPer100Km(ethanolPrecoLitro, ethanolKmPorLitro),
  };

  const ethanolIsBetter = ethanol.costPorKm < gasolina.costPorKm;
  const MelhorCombustivel = ethanolIsBetter ? 'ethanol' : 'gasoline';

  const cheaper = ethanolIsBetter ? ethanol.costPorKm : gasolina.costPorKm;
  const pricier = ethanolIsBetter ? gasolina.costPorKm : ethanol.costPorKm;

  return {
    gasolina,
    ethanol,
    MelhorCombustivel,
    PercentualDeEconomia: percentMoreExpensive(cheaper, pricier),
    equilibriumEthanolPrice: equilibriumEthanolPreco(
      gasolinaPrecoLitro,
      ethanolKmPorLitro,
      gasolinaKmPorLitro,
    ),
    regraPraticaEthanol: ruleOfThumbEthanolPrice(gasolinaPrecoLitro),
  };
}

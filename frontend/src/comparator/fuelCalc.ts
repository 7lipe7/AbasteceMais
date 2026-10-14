// ============================================================
//  Tipos
// ============================================================

export interface EntredaDecomparacao {
  gasolinaPrecoLitro: number; // preço da gasolina (R$/l)
  ethanolPrecoLitro: number;  // preço do etanol (R$/l)
  gasolinaKmPorLitro: number;    // consumo com gasolina (km/l)
  ethanolKmPorLitor: number;     // consumo com etanol (km/l)
}

export interface FuelCost {
  costPorKm: number;   // custo por km (R$/km)
  costPor100Km: number; // custo a cada 100 km (R$/100km)
}

export interface ComparisonResult {
  gasolina: FuelCost;
  ethanol: FuelCost;
  MelhorCombustivel : 'gasoline' | 'ethanol';  // qual compensa mais
  PercetualDeEconomia: number;            // quanto o mais caro é mais caro (%)
  equilibriumEthanolPrice: number;   // preço de equilíbrio do etanol (R$/l)
  regrtaPraticaEthanol: number;   // regra dos 70% (só referência)
}

// ============================================================
//  Funções puras de cálculo
// ============================================================

/** Custo por quilômetro = preço/litro ÷ consumo (km/l). */
export function costPerKm(precoPorLitro: number, kmPorLitro: number): number {
  return precoPorLitro / kmPorLitro;
}

/** Custo a cada 100 km rodados. */
export function costPer100Km(pricePerLiter: number, kmPerLiter: number): number {
  return costPerKm(pricePerLiter, kmPerLiter) * 100;
}

/**
 * Preço de equilíbrio do etanol (P_eq): o preço MÁXIMO do etanol que ainda
 * compensa versus a gasolina, considerando os consumos REAIS do veículo.
 *
 *   P_eq = (P_gasolina × K_etanol) / K_gasolina
 */
export function equilibriumEthanolPrice(
  gasolinePrice: number,
  ethanolConsumption: number,
  gasolineConsumption: number,
): number {
  return (gasolinePrice * ethanolConsumption) / gasolineConsumption;
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
export function compareFuels(input: ComparisonInput): ComparisonResult {
  const {
    gasolinePricePerLiter,
    ethanolPricePerLiter,
    gasolineKmPerLiter,
    ethanolKmPerLiter,
  } = input;

  const gasoline: FuelCost = {
    costPerKm: costPerKm(gasolinePricePerLiter, gasolineKmPerLiter),
    costPer100Km: costPer100Km(gasolinePricePerLiter, gasolineKmPerLiter),
  };

  const ethanol: FuelCost = {
    costPerKm: costPerKm(ethanolPricePerLiter, ethanolKmPerLiter),
    costPer100Km: costPer100Km(ethanolPricePerLiter, ethanolKmPerLiter),
  };

  const ethanolIsBetter = ethanol.costPerKm < gasoline.costPerKm;
  const bestFuel = ethanolIsBetter ? 'ethanol' : 'gasoline';

  const cheaper = ethanolIsBetter ? ethanol.costPerKm : gasoline.costPerKm;
  const pricier = ethanolIsBetter ? gasoline.costPerKm : ethanol.costPerKm;

  return {
    gasoline,
    ethanol,
    bestFuel,
    savingsPercent: percentMoreExpensive(cheaper, pricier),
    equilibriumEthanolPrice: equilibriumEthanolPrice(
      gasolinePricePerLiter,
      ethanolKmPerLiter,
      gasolineKmPerLiter,
    ),
    ruleOfThumbEthanolPrice: ruleOfThumbEthanolPrice(gasolinePricePerLiter),
  };
}

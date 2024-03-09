type Currency = {
  name: string,
  symbol: string,
};

type Currencies = Record<string, Currency>;

type Languages = Record<string, string>;


export type ICountriesList = {
  flags: {
    svg: string,
    alt: string,
  },
  name: {
    official: string
  },
  translations: {
    por: {
      official: string,
      common: string,
    }
  },
  population: number
  region: string,
  capital: string[],
  currencies: Currencies | Record<string, never>,
  languages: Languages | Record<string, never>,
}

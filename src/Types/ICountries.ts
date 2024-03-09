type Currency = {
  name: string,
  symbol: string,
};

type Currencies = {
  [currencyCode: string]: Currency,
};

type Languages = {
  [languageCode: string]: string,
}

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
  currencies?: Currencies,
  languages?: Languages,
}

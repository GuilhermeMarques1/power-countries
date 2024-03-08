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
  currencies: any,
  languages: any
}

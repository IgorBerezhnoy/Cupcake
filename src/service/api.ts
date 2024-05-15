const BASE_API_URL = 'http://localhost:3000/api/v1/'

export const API = {
  first: `${BASE_API_URL}first/`,
  poll: 'poll',
  second: `${BASE_API_URL}second/`,
  third: `${BASE_API_URL}third/`,
}

export type ResponseType = {
  base: string
  date: string
  rates: CurrencyType
  timestamp: number
}
export type CurrencyType = {
  EUR: number
  RUB: number
  USD: number
}

import { CurrencyType, ResponseType } from '@/service/api'

export const getPollData = async ({ setData, url }: PollDataType) => {
  const poll = async () => {
    try {
      const response = await fetch(url)
      const data = (await response.json()) as ResponseType

      setData(data.rates)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      poll() // Повторно запускаем запрос после получения данных
    }
  }

  poll() // Начинаем цикл long polling

  return new Promise(() => {}) // Возвращаем Promise для избежания завершения функции
}

type PollDataType = {
  setData: (data: CurrencyType) => void
  url: string
}

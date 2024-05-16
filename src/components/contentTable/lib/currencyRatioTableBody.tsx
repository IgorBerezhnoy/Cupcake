import { TableProps } from '@/components/contentTable/contentTable'
import { currencyRatio } from '@/constans'

export const CurrencyRatioTableBody = ({ first, second, third }: TableProps) => {
  return currencyRatio.map(pair => {
    const fRUB = first[pair.split('/')[0] as 'RUB']

    const fUSD = first[pair.split('/')[1] as 'USD']

    const sRUB = second[pair.split('/')[0] as 'RUB']

    const sEUR = second[pair.split('/')[1] as 'EUR']

    const tEUR = third[pair.split('/')[0] as 'EUR']

    const tUSD = third[pair.split('/')[1] as 'USD']

    const firstEl = (fRUB / fUSD).toFixed(2)
    const secondEl = (sRUB / sEUR).toFixed(2)
    const thirdEl = (tEUR / tUSD).toFixed(2)
    const min = Math.min(+firstEl, +secondEl, +thirdEl)

    return (
      <tr key={pair}>
        <td>{pair}</td>
        <td className={+firstEl === min ? 'minCell' : ''}>{firstEl}</td>
        <td className={+secondEl === min ? 'minCell' : ''}>{secondEl}</td>
        <td className={+thirdEl === min ? 'minCell' : ''}>{thirdEl}</td>
      </tr>
    )
  })
}

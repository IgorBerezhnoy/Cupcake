import { TableProps } from '@/components/contentTable/contentTable'
import { currency } from '@/constans'

export const CurrencyTableBody = ({ first, second, third }: TableProps) => {
  return currency.map((currency, i) => {
    const firstEl = first[currency].toFixed(2)
    const secondEl = second[currency].toFixed(2)
    const thirdEl = third[currency].toFixed(2)
    const min = Math.min(+firstEl, +secondEl, +thirdEl)

    return (
      <tr key={i}>
        <td>{currency} / CUPCAKE</td>
        <td className={+firstEl === min ? 'minCell' : ''}>{firstEl}</td>
        <td className={+secondEl === min ? 'minCell' : ''}>{secondEl}</td>
        <td className={+thirdEl === min ? 'minCell' : ''}>{thirdEl}</td>
      </tr>
    )
  })
}

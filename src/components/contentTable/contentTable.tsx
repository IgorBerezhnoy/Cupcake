import { CurrencyRatioTableBody } from '@/components/contentTable/lib/currencyRatioTableBody'
import { CurrencyTableBody } from '@/components/contentTable/lib/currencyTableBody'
import { TableHeaders } from '@/components/contentTable/lib/tableHeaders'
import { CurrencyType } from '@/service'

import './contentTable.css'

export const ContentTable = ({ first, second, third }: TableProps) => {
  return (
    <table>
      <TableHeaders />
      <tbody>
        <CurrencyTableBody first={first} second={second} third={third} />
        <CurrencyRatioTableBody first={first} second={second} third={third} />
      </tbody>
    </table>
  )
}
export type TableProps = {
  first: CurrencyType
  second: CurrencyType
  third: CurrencyType
}

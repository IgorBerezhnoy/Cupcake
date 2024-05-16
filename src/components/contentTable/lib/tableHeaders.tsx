import { tableTopHeader } from '@/constans'

export const TableHeaders = () => {
  return (
    <thead>
      <tr>
        {tableTopHeader.map((el, i) => (
          <th key={i}>{el}</th>
        ))}
      </tr>
    </thead>
  )
}

import { useEffect, useState } from 'react'

import { ContentTable } from '@/components/contentTable/contentTable'
import { Loader } from '@/components/loader'
import { API, CurrencyType, getPollData } from '@/service'

function App() {
  const [first, setFirst] = useState<CurrencyType | null>(null)
  const [second, setSecond] = useState<CurrencyType | null>(null)
  const [third, setThird] = useState<CurrencyType | null>(null)

  useEffect(() => {
    getPollData({ setData: setFirst, url: API.first + API.poll })
    getPollData({ setData: setSecond, url: API.second + API.poll })
    getPollData({ setData: setThird, url: API.third + API.poll })
  }, [])

  return (
    <>
      {second && first && third ? (
        <ContentTable first={first} second={second} third={third} />
      ) : (
        <Loader />
      )}
    </>
  )
}

export default App

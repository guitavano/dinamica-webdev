import Image from 'next/image'
import Cards from './components/cards.jsx'

export default function Home() {
  return (
    <div class="w-full flex flex-col overflow-clip box">
      <Cards/>
    </div>
  )
}

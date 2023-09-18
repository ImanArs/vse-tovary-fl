import Sidebar from '@/components/sidebar/Sidebar'
import Card from '@/components/product/Card'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Sidebar />
      <Card/>
    </main>
  )
}

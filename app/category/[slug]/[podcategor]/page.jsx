import Card from '@/components/Product/Card';
import React from 'react'

const page = ({params}) => {
  console.log(params);
  return (
    <main>
      page {params.podcategor} из {params.slug}
      <Card />
    </main>
  )
}

export default page
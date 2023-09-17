'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const page = ({params}) => {
  const [urlObj, setUrlObj] = useState(null)
  
  let decodeURL = params.slug ? decodeURIComponent(params.slug) : '';
  const categoryRoutes = useSelector(state => state.routes.categoryRotes)
  console.log(categoryRoutes);

  useEffect(() => {
    const url = categoryRoutes.find(item => item.name === decodeURL)
    setUrlObj(url)
    console.log(url, "url obj");
  },[params.slug])

  return (
    <main>page slug {urlObj?.name}</main>
  )
}

export default page
import BookSalesChart from '@/components/BookSalesChart'
import React from 'react'

const BookSales = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Book Sales</h1>
      <BookSalesChart />
    </div>
  )
}

export default BookSales
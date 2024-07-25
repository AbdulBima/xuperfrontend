import MonthlySalesChart from '@/components/MonthlySalesChart'
import React from 'react'

const MonthlySales = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Monthly Sales</h1>
     <MonthlySalesChart />
    </div>
  )
}

export default MonthlySales
import UserPurchasesChart from '@/components/UserPurchasesChart'
import React from 'react'

const UserPurchases = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center ">
    <h1 className="text-3xl font-bold text-center ">User Purchases</h1>
     <UserPurchasesChart /> 
  </div>
  )
}

export default UserPurchases
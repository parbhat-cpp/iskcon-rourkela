import { Metadata } from 'next'
import React from 'react'
import RefundPolicyPage from './RefundPolicyPage'

export const metadata: Metadata = {
  title: "Refund Policy",
}

const RefundPolicy = () => {
  return (
    <>
      <RefundPolicyPage />
    </>
  )
}

export default RefundPolicy
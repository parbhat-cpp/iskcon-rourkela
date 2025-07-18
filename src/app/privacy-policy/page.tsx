import { Metadata } from 'next'
import React from 'react'
import PrivacyPolicyPage from './PrivacyPolicyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

const PrivacyPolicy = () => {
  return (
    <><PrivacyPolicyPage /></>
  )
}

export default PrivacyPolicy
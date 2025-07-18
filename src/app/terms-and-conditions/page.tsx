import React from 'react'
import TermsCondition from './TermsCondition'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
}

const TermsPage = () => {
  return (
    <>
      <TermsCondition />
    </>
  )
}

export default TermsPage
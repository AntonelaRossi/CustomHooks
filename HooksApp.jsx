import React from 'react'
import { CounterApp } from './src/components/CounterApp'
import { FormsApp } from './src/components/FormsApp'
import { FetchApp } from './src/components/FetchApp'

export const HooksApp = () => {
  return (
    <>
      <div>HooksApp</div>
      <hr />
      <CounterApp />
      <FormsApp />
      <hr />
      <FetchApp />
    </>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const AppLayout = styled.div`
  background: #fff;
  max-width: 375px;
  padding: 1rem;
  margin: 2rem auto;
  border-radius: 2rem;
  min-height: 812px;
  box-shadow: 0 0 20px -10px #00000059;
  h1 {
    text-align: center;
  }
`

const fade = {
  on: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3
    }
  }),
  off: i => ({
    opacity: 0,
    y: -20
  }),
}

const App = () => {
  return (
    <AppLayout>
      <motion.div>
        <motion.h1
          variants={fade}
          initial="off"
          animate="on"
          custom={1}
        >omar2205 Github Pages</motion.h1>
        <motion.p
          variants={fade}
          initial="off"
          animate="on"
          custom={1.8}
        >Empty for now 😔😔</motion.p>
      </motion.div>
    </AppLayout>
  )
}

export default App

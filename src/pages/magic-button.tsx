import React, {useState} from 'react'
import styled from 'styled-components'
import {motion, AnimatePresence} from 'framer-motion'

const ButtonContainer = styled.div`
  margin-bottom: 25px;
`

const BlueDiv = styled(motion.div)`
  width: 0;
  height: 27px;
  background: #72aae2;
`

const AnimatedBlueDiv = ({isVisible}) => (
  <AnimatePresence>
    {isVisible && <BlueDiv
      initial={{width: 0}}
      animate={{width: 119}}
      exit={{opacity: 0}}
      transition={{duration: 1.5}}
    />}
  </AnimatePresence>
)

const doSomething = (setState) => () => {
  setState(true)
  setTimeout(() => {
    setState(false)
  }, 1500)
}

export const MagicButton = () => {
  const [working, setWorking] = useState(false)

  return (
    <>
      <ButtonContainer>
        <button disabled={working} onClick={doSomething(setWorking)}>
          {working ? 'Working...' : 'Do some work!'}
        </button>
      </ButtonContainer>
      <AnimatedBlueDiv isVisible={working}/>
    </>
  )
}

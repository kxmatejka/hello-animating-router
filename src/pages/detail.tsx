import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {data} from '../data'

const Container = styled(motion.div)`
  width: 0;
`

export const Detail = ({id}) => {
  const {
    title,
    img
  } = data[id]

  return (
    <Container
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div>
        <Link href='/list'>
          <a>
            back
          </a>
        </Link>
      </div>
      <h1>
        {title}
      </h1>
      <img
        src={img}
        alt={title}
      />
    </Container>
  )
}

Detail.getInitialProps = ({query}) => ({id: query.id})

import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {data} from '../data'

const Container = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
`

const StyledImage = styled.img`
  width: 250px;
`

const StyledAnchor = styled.a`
  cursor: pointer;
  display: block;
  margin: 20px;
`

const StyledTitle = styled.div`
  text-align: center;
`

const ImageLink = ({id}) => {
  const {
    title,
    img
  } = data[id]

  return (
    <Link href='/photos/[id]' as={`/photos/${id}`}>
      <StyledAnchor>
        <StyledImage
          src={img}
          alt={title}
        />
        <StyledTitle>{title}</StyledTitle>
      </StyledAnchor>
    </Link>
  )
}

export const List = () => (
  <Container
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  >
    {Object.keys(data).map(key => <ImageLink id={key} key={key}/>)}
  </Container>
)

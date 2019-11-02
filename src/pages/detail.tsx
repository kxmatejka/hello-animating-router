import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {data} from '../data'

export const Detail = ({id}) => {
  const {
    title,
    img
  } = data[id]

  return (
    <motion.div
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
    </motion.div>
  )
}

Detail.getInitialProps = ({query}) => ({id: query.id})

import React from 'react'
import App from 'next/app'
import {AnimatePresence} from 'framer-motion'

export default class extends App {
  render () {
    const {
      Component,
      pageProps,
      router
    } = this.props

    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    )
  }
}

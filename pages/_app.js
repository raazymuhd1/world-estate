import Head from 'next/head'
import Router from 'next/router'
import NProgress from "nProgress"
import { ChakraProvider } from "@chakra-ui/react"

import {Layout} from "../components"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider>
         <Layout>
            <Component { ...pageProps } />
         </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp

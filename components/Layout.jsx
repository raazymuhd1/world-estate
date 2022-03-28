import Head from "next/head"
import { Box } from "@chakra-ui/react"

const Layout = ({children}) => (
    <>
        <Head>
            <title> PropertySelling </title>
        </Head>
        <Box maxWidth="1280px" m='auto'>
            <header>
                navbar
            </header>
            <main>
                {children}
            </main>
            <footer>
                footer
            </footer>
        </Box>
    </>
)

export default Layout;
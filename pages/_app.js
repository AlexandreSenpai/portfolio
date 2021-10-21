import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/globalStyle"
import { theme } from "../styles/theme"
import { motion } from 'framer-motion'

export default function App({
  Component, pageProps, router
}) {
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1,
        transition: {
          delay: .1
        }
      },
    }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </motion.div>
  )
}

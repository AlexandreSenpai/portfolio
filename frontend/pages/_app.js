import { GlobalStyle } from "../styles/globalStyle"
import { motion } from 'framer-motion'
import { ThemeContextProvider } from "../contexts/theme.context"

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
      <ThemeContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </motion.div>
  )
}

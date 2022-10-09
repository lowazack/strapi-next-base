import AppContainer from "../components/AppContainer/AppContainer";
import "../styles/app.scss"

export default function MyApp({ Component, pageProps }) {
    return (
        <AppContainer>
            <Component {...pageProps} />
        </AppContainer>
    )
}
  
  

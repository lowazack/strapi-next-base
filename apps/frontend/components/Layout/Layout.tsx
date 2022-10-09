import AppContainer from "../AppContainer/AppContainer"
import Header from "../Header"

export default function Layout({children}){
    return (
        <AppContainer>
        <Header />

        {children}
        <footer>Footer</footer>
        </AppContainer>
    )
}
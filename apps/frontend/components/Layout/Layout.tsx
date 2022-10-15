import AppContainer from "../AppContainer/AppContainer"
import Footer from "../Footer"
import Header from "../Header"

export default function Layout({children}){
    return (
        <AppContainer>
        <Header />

        {children}
        <Footer />
        </AppContainer>
    )
}
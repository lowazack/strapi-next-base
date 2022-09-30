import AppContainer from "../AppContainer/AppContainer"

export default function Layout({children}){
    return (
        <AppContainer>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
        </AppContainer>
    )
}
import AppContainer from "../components/AppContainer/AppContainer";
import Layout from "../components/Layout";

import "../styles/app.scss";


export default function defaultLayout(props){
    const {children} = props;
    return (
        <AppContainer>
            <Layout>
                {children}
            </Layout>
        </AppContainer>
    )
}
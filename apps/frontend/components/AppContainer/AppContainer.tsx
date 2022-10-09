import Provider from "jotai"

interface appContainerTypes {
    children: React.ReactNode;
}

export default function AppContainer({children}: appContainerTypes){
    return (
        <div>
        {children}
        </div>
        
    )
}
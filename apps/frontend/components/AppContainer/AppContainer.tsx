interface appContainerTypes {
    children: React.ReactNode;
}

export default function AppContainer({children}: appContainerTypes){
    return (
        <>
            {children}
        </>
    )
}
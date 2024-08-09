function Header({headerInfo,cname,children}){
    // let {headerInfo}=props;
    // console.log(headerInfo);
    
    // console.log(props.headerInfo.email)
    // console.log(props.headerInfo.phone)
    return(
        <>
        {children}
            <h2>Header Part</h2>
            <h2>{headerInfo.email} {cname}</h2>  
                 
        </>
    )
}
export {Header}
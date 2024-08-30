import React from "react";
import styler from "./Container.module.css"

const Container = (props) => {

    return(
       <div className={styler.Container}>
        {props.children}
       </div>
    )

}

export default Container
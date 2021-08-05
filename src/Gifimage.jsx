import React from 'react'

const Gifimage = (props) => {

    const callgif=()=>{
        props.functo(props.url)
    }

    return (
     <div style={{display:'inline',marginLeft:'10px'}}>
         
         <img onClick={callgif} src={props.url} style={{width:'100px',height:'100px'}}/>
            
    </div>
    )
}

export default Gifimage

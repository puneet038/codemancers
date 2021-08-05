import React from 'react'

const Gifcard = (props) => {
    return (
        <div>
            <img src={props.img} style={{width:'150px',height:'100px',float:'right',margin:'10px 5px 0px 0px'}}/>
            
        </div>
    )
}


export default Gifcard

import React from 'react'

const Card = (props) => {
    return (<>
        <div class="card">
             <p className="message" >{props.mess}</p>
         </div>
    </>)
}

export default Card;

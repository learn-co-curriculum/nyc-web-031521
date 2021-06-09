import React from 'react'
import {useState} from 'react'
 
function SingleOrder({order}){
    let [clicked, setClicked] = useState(false)

    let handleClick = () => {
        setClicked(!clicked)
    }

    let handleRefund = () => {
        console.log(order)
    }

    return(
        <div>
            <p onClick={handleClick}>{"TIME STAMP"}</p>
            {
                clicked 
                    ? 
                <ul>
                    {order.burgers.map((burger, idx) => {
                        return <li key={idx}>{burger.name}</li>
                    })}
                </ul>
                    :
                null
            }
            <button onClick={handleRefund}>Refund Order</button>
        </div>
    )
}


export default SingleOrder
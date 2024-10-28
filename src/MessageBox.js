import { useState } from "react"
import "./MessageBox.css"


function MessageBox(){

    const [myClass , setMyClass] = useState('success')

    const clickHandler = ()=>{
        // if(myClass == 'success') setMyClass('failure')
        // else setMyClass('success')
        myClass == 'success' ? setMyClass('failure') : setMyClass('success')
    }
    return(
        <>
            <div className={`messageBox ${myClass}`}>
                {
                    myClass == 'success' ? 'پرداخت با موفقیت انجام شد' : 'پرداخت با شکست مواجه شد'
                }

            </div>
            <button onClick={clickHandler}>Click me</button>
        </>
    )
}

export default MessageBox
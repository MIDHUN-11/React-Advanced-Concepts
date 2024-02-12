import CBChild from "./CBChild";
import {useState} from 'react';
import useCustomHook1 from "./CustomHook1";

const CBParent=()=>{
    const [inputState,setInputState]=useState("");
    useCustomHook1();
    return(
        <div>
             <p>this is in parent {inputState}</p>
             <div style={{height:"100px",width:"100px",background:inputState}}></div>
            <CBChild input={inputState} setInput={setInputState}/>
           
        </div>
    )
}
export default CBParent;
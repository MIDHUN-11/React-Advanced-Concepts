import CBChild from "./CBChild";
import {useState} from 'react';
import useCustomHook1 from "./CustomHook1";
import useCustomHook2 from "./CustomHook2";
//we can pass data from child to parent by creating a state in parent and passing it as props to child and change that props in child.this will change the state in parent and parent component will be rerendered.Now data enetered in child component which was changed using setstate function will change the state and hence the parent component has the access to data entered in child using the state.
const CBParent=()=>{
    const [inputState,setInputState]=useState("");
    useCustomHook1();
    useCustomHook2();
    return(
        <div>
             <p>this is in parent {inputState}</p>
             <div style={{height:"100px",width:"100px",background:inputState}}></div>
            <CBChild input={inputState} setInput={setInputState}/>
           
        </div>
    )
}
export default CBParent;
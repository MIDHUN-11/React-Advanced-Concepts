import {useCallback, useMemo, useState} from 'react';
import usePrevCustomHook from './usePrevCustomHookk';
const UseMemoComp=()=>{
    const[state1,setState1]=useState(false);
    const[state2,setState2]=useState(0);
    function complexFunction(){
        console.log("this is inside some time  taking complex funtion");
    }
    const fnc=useCallback(()=>{
        // console.log("new instance created");
        return function simpleFunction(){
            // console.log({state2});
            console.log("assume this is a normal functiion");
        }
    },[state2])


    // console.log(fnc);
    // let prevfunc=usePrevCustomHook(fnc);
//    let val= complexFunction();
    // if(fnc==prevfunc){
    //     console.log("both are same");
    // }
    // else{
    //     console.log("both are diff");
    // }
let val=useMemo(()=>{
    return complexFunction();
},[state1]);
    return(
        <>
        <p>this is inside useMemo</p>
        <button onClick={()=>{
            setState1((prev)=>!prev)
        } }>{state1? "true":"false"}</button>
        <button onClick={()=>{
            setState2((prev)=>prev+1)
        }}>{state2}</button>
        </>
    );
}
export default UseMemoComp;
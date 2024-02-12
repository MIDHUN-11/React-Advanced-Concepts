import { useEffect } from "react";

const useCustomHook1=()=>{
    useEffect(()=> console.log("i mounted"),[])
   
}
export default useCustomHook1;
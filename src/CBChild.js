
const CBChild=(props)=>{
    const {input,setInput}=props;
    return(
        <>
        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
        </>
    )
}
export default CBChild;
import Props from "./Props";

function First(){
    let name="midhun";
    return(
        <div>
            <p> this is my first component</p>
           <Props value={name}/>
        </div>
    )
}
export default First;
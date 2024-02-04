import { BrowserRouter,Routes,Route, Link } from "react-router-dom"

const SubRouting=()=>{
    return(
        <div>
            {/* <BrowserRouter> */}
            <Link to={'/controlled'}>Controlled</Link><br/>
            <Link to={'/uncontrolled'}>UnControlled</Link>
            <Routes>
                <Route></Route>
                <Route></Route>
            </Routes>
            {/* </BrowserRouter> */}
        </div>
    )
}
export default SubRouting;
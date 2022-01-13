import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Timer } from "./componenet/index";

const Router = (props) =>{
    console.log("my data is",props.persondata)
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="" element={<Timer/>} />
        </Routes>
        </BrowserRouter>

        </>
        
    )
}

export default Router;

import { useRouteError } from "react-router-dom"

const Errorpage = ()=>{

    const err = useRouteError();
    console.log(err);

    return <div>
        <h2> Ooops.... Something Went Wrong 🏄🏄</h2>
        <h2>{err.status} : {err.statusText}!!</h2>
    </div>
}

export default Errorpage
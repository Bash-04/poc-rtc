import ItemSelecter from "../components/ItemSelecter";
import { GetItemsWS } from "../lib/ItemLib";

function home(){
    return(
        <div className="home">
            <h1>Home</h1>
            <ItemSelecter />
            <button onClick={() => GetItemsWS()}>ws</button>
        </div>
    )
}

export default home;
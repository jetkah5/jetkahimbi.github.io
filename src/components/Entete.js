import Navigations from "./Navigation";
const Entete=()=>{
    let titre = "</>J34k.";
    return(
        <div className="entete">
            <div className="titre"><h1>{titre}</h1></div>
            <div className="nav"><Navigations /></div>
        </div>
    );
}
export default Entete
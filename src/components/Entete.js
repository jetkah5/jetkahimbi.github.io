import Navigations from "./Navigation";

const Entete=()=>{
    let titre = "</>Jetkahimbi";
    return(
        <div className="entete">
            <h1>{titre}</h1>
            <Navigations />
        </div>
    );
}
export default Entete
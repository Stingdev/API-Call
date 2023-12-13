import {useState} from "react";
function SearchHeader( {search}){

    const [valueInput, setValue] = useState('')

    const handleFormSubmit =(event)=>{
        event.preventDefault();
        search(valueInput);
    };

    const handleChange =(event) =>{
        setValue( event.target.value)
    }
    return <div className="searchdiv">
        <form className ="searchform" onSubmit={handleFormSubmit}>
        <label>
            Ne Arıyorsunuz?
         </label>
        <input className="searchinput" value={valueInput} onChange={handleChange} />
        </form>
    </div>
}
export default SearchHeader;
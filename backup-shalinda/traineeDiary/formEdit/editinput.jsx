import { useState } from "react";
import "./editInput.css"

const formInput = (props) => {
    const[focused,setFouced]=useState(false);

    const{label,errorMessage, onChange, id, ...inputProps}=props;


    const handleFocus = (e)=>{
        setFouced(true);
    };

    return (
        <div className="editInput">
            <label>{label} </label>
            <input {...inputProps} 
                   onChange={onChange} 
                   onBlur={handleFocus}
                
                   focused={focused.valueOf.toString()}/>
            <span>{errorMessage}</span>
        </div>
    );



};
export default editInput;
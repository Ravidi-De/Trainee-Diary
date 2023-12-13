import { useState } from "react";
import "./app.css"
import formInput from "./formInput";

const App = () =>{
    const [Values,setValues] = useState({
        Title:"",
        Type:"",
        Date:"",
        YourMessage:""
    });

    const inputs =[
        {
            id:1,
            name:"title",
            type:"text",
            placeholder:"Title",
            errorMessage:"Title should be 5-10 characters and shouldn't include any special character!",
            label:"Title",
            pattern:"^[A-Za-z0-9]{5,10}$",
            required:true,
        },
        {
            id:2,
            name:"type",
            type:"text",
            placeholder:"Type",
            errorMessage:"Type should be 5-10 characters and shouldn't include any special character!",
            label:"Type",
            pattern:"^[A-Za-z0-9]{5,10}$",
            required:true,
        },
        {
            id:3,
            name:"date",
            type:"Date",
            placeholder:"Date",
            label:"Date",
            
        },
        {
            id:4,
            name:"yourMessage",
            type:"text",
            placeholder:"Your Message",
            errorMessage:" Your Message should be 15-20 characters and shouldn't include any special character!",
            label:"Your Message",
            pattern:"^[A-Za-z0-9]{15,20}$",
            required:true,
        }
        ]



    const [title,settitle]= useState("");

    const handleSubmitfunction =(e)=> {
        e.preventDefault();

    };

    const onChange =(e) =>{
        setValues({...Values,[e.target.name]: e.target.Value});
    };



    console.log(Values);

    return (
    <div className="app">
        <form onSubmit={handleSubmit}>
            <h1>Create Calender Item</h1>
            {inputs.map(input=> (
                <formInput 
                key={input.id}
                {...input} 
                Value={Values[input.name]} 
                onChange={onChange}
                />
            ))}
            
            <button>Submit</button>
            
        </form>
    </div>
    );
};
export default App;
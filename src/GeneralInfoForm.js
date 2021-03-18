import {React} from "react";

const GeneralInfoForm = (props)=>{
//general info form (name, email, phone)
//save in state as generalInfo: {name, email, phone}

    return (<form id="generalInfo" onSubmit={(e: React.FormEvent)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        let formData = { name: data.get("name"), email: data.get("email"), phone: data.get("phone")}
        props.handleSubmit(e, formData);
        }}>
        <label htmlFor="name" >Name</label>
        <input id="name" name="name" type="text" value={props.generalInfo.name} onChange={(e)=>{props.onChange(e,"generalInfo")}} />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={props.generalInfo.email} onChange={(e)=>{props.onChange(e,"generalInfo")}} />
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" name="phone" type="number" value={props.generalInfo.phone} onChange={(e)=>{props.onChange(e,"generalInfo")}} />
        <input type="submit" value="Submit" />
    </form>);

}

export default GeneralInfoForm;
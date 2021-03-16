import {React} from "react";

const GeneralPreview = (props)=>{
    return (<section className="preview">
        <p>Name: {props.generalInfo.name}</p>
        <p>Email: {props.generalInfo.email}</p>
        <p>Phone: {props.generalInfo.phone}</p>
    </section>)
}

export default GeneralPreview;
import {React} from "react";
//save in state as educationalXP={school, major, dates: {start, end}}
const EducationPreview = (props)=>{
    return (<section className="preview">
        <p>School: {props.educationXP.education}</p>
        <p>Major: {props.educationXP.major}</p>
        <p>{props.educationXP.dateStart} - {props.educationXP.dateEnd}</p>
    </section>);
}

export default EducationPreview;
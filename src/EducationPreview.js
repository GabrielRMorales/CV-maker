import {React} from "react";
//save in state as educationalXP={school, major, dates: {start, end}}
const EducationPreview = (props)=>{
    return (<section className="preview">
        <p>{props.educationXP.school}</p>
        <p>{props.educationXP.major}</p>
        <p>{props.educationXP.dates.start} - {props.educationXP.dates.end}</p>
    </section>);
}

export default EducationPreview;
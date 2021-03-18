import React from "react";
//educational xp form(school, major, dates)
//save in state as educationalXP={school, major, dates: {start, end}}
const EducationForm = (props)=>{

    return (<form id="educationXP" onSubmit={(e: React.FormEvent )=>{
        e.preventDefault();
        const data = new FormData(e.target);
        let formData = {education: data.get("education"), major: data.get("major"), dateStart: data.get("date-start"), dateEnd: data.get("date-end")}        
        props.handleSubmit(e, formData)
    }}>
        <label htmlFor="education" >Educational Institution</label>
        <input id="education"  name="education" type="text" value={props.educationXP.education} onChange={(e)=>props.onChange(e, "educationXP")}/>
        <label htmlFor="major" >Major/Focus</label>
        <input id="major"  name="major" type="text" value={props.educationXP.major} onChange={(e)=>props.onChange(e, "educationXP")}/>
        <label htmlFor="date-start">Start Date</label>
        <input id="date-start" name="date-start" type="date" value={props.educationXP.dateStart} onChange={(e)=>props.onChange(e, "educationXP")}/>
        <label htmlFor="date-end">End Date</label>
        <input id="date-end" name="date-end" type="date" value={props.educationXP.dateEnd} onChange={(e)=>props.onChange(e, "educationXP")}/>
        <input type="submit" value="Submit" />
    </form>)
}

export default EducationForm;
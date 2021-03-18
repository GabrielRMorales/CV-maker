import {React} from "react";

const WorkPreview = (props)=>{
    const workXPList = props.workXP.map((work)=>{
        return  (<div>
            <h1>{work.company}</h1>
            <h2>{work.position}</h2>
            <li>{work.dateStart}-{work.dateEnd}</li>
            <br />
            </div>);
    });
    return (<section className="preview">
        <h2>Work Experience</h2>
       {workXPList}
    </section>)
}

export default WorkPreview;
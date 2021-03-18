import React from "react";

const WorkFormInput = (props)=>{
            //should be based on index here, taken from props
            let id = props.id;
            //make props id below id
        return (<fieldset>
            <button>X</button>
            <label htmlFor={`company-${props.id}`}>Company Name</label>
            <input id={`company-${props.id}`}  name={`company-${id}`} type="text" value={props.val[id].company} onChange={props.onChange} />
            <label htmlFor={`position-${props.id}`}>Position</label>
            <input id={`position-${props.id}`}  name={`position-${id}`} type="text" value={props.val[id].position} onChange={props.onChange} />
            <label htmlFor={`date-start-${props.id}`}>Start Date</label>
            <input id={`date-start-${props.id}`} name={`date-start-${id}`} type="date" value={props.val[id].dateStart} onChange={props.onChange} />
            <label htmlFor={`date-end-${props.id}`}>End Date</label>
            <input id={`date-end-${props.id}`} name={`date-end-${id}`} type="date" value={props.val[id].dateEnd} onChange={props.onChange} />
        </fieldset>);
}

export default WorkFormInput;
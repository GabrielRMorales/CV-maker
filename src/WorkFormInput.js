import React from "react";

const WorkFormInput = (props)=>{
            //should be based on index here, taken from props
        return (<fieldset>
            <label htmlFor={`company-${}`}>Company Name</label>
            <input id="company-"  name="company-" type="text" value={} />
            <label htmlFor="position-">Position</label>
            <input id="position-"  name="position-" type="text" value={} />
            <label htmlFor="date-start-">Start Date</label>
            <input id="date-start-"  name="date-start-" type="number" value={} />
            <label htmlFor="date-end-">End Date</label>
            <input id="date-end-" name="date-end-" type="number" value={} />
        </fieldset>);
}

export default WorkFormInput;
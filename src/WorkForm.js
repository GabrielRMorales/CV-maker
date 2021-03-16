import React, {React, Component} from "react";
import WorkFormInput from "./WorkFormInput";
//work xp form (company name, position, dates)
//save in state as workXP = [{company, position, dateStart, dateEnd}]

const WorkForm = (props)=>{
    const [workHistory, setWorkHistory]=useState([]);

    const workHistoryInputs = workHistory.map((work, index)=>{
        return < WorkFormInput onChange={(e)=>{

            let newWorkHistory = workHistory.map((work, index)=>{
                if (e.target.id===index){
                   // return {company: e.target.value, position: e.target.value, dateStart: e.target.value, dateEnd: e.target.value}
                   return {[e.target.name]: [e.target.value]}
                }
                return work;
            });
            setWorkHistory(newWorkHistory);
        }} val={workHistory} id={index} />;
    });
    return (<form onSubmit={(e: React.FormEvent)=>{
        e.preventDefault();
        let data = new FormData(e.target);      
        let formData = {company: data.get("company"), position: data.get("position"), dateStart: data.get("date-start"), dateEnd: data.get("date-end")}
        props.handleSubmit(e, formData)}}>
            {workHistoryInputs}
      {  //for adding multiple companies, you can use functionalState to add another chunk of input into state
              //include an add button that adds another object into local state, 

        //then create a workHistoryInputs array by mapping over state, and for each "chunk" return <WorkFormInput /> with proper indexing as props 
        //set this as the input ie <form>{workHistoryInputs}</form>

        //onChange will affect local state, and value will be based on it
        //submit should submit the state of this form
        //iterate over the different inputs and change id as index

        //BASICALLY majority of state is handled within this app, only the submit coming from CVForm, consider making this component stateful if needed

      }
        
        <button onClick={()=>{
            let newWorkHistory = [...workHistory, {}];
            setWorkHistory(newWorkHistory);
        }}>Add Company</button>
    </form>)

}

export default WorkForm;
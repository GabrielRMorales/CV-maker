import React, {useEffect, useState} from "react";
import WorkFormInput from "./WorkFormInput";
//work xp form (company name, position, dates)
//save in state as workXP = [{company, position, dateStart, dateEnd}]

const WorkForm = (props)=>{
    
    const [workHistory, setWorkHistory]=useState([{}]);

    const workHistoryInputs = workHistory.map((work, index)=>{
        return < WorkFormInput onChange={(e)=>{
            let id = e.target.id.split("-")[1];
            let newWorkHistory = workHistory.map((work, index)=>{
                if (id===index){
                   return Object.assign({}, work, {[e.target.name]: [e.target.value]});
                }
                return work;
            });
            setWorkHistory(newWorkHistory);
        }} val={workHistory} key={index} id={index} />;
    });

    //can set workHistory in componentDidMount, taken as props in CVForm
    //this will allow you to have the text saved in the edit

    return (<form id="workXP" onSubmit={(e: React.FormEvent)=>{
        e.preventDefault();
        let totalFormData=[];
        for (let i=0;i<workHistory.length;i++){
          
            let data = new FormData(e.target);   
            // console.log(data.get(`company-${i}`));
            // console.log(data.get(`position-${i}`));
            let formData = {company: data.get(`company-${i}`), position: data.get(`position-${i}`), dateStart: data.get(`date-start-${i}`), dateEnd: data.get(`date-end-${i}`)}
            totalFormData.push(formData);
        }

        props.handleSubmit(e, totalFormData)
    }} >
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
        <input type="submit" value="Submit" />
        <button onClick={(e)=>{
            e.preventDefault();
            let newWorkHistory = [...workHistory,
                {}];
            setWorkHistory(newWorkHistory);
        }}>Add Company</button>
    </form>)

}

export default WorkForm;
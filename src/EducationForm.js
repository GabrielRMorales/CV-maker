import React, {Component} from "react";
//educational xp form(school, major, dates)
//save in state as educationalXP={school, major, dates: {start, end}}
class EducationForm extends Component {

    constructor(props){
        super(props);
        this.state={
            education: "",
            major: "",
            dateStart: "",
            dateEnd: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
       const {education, major, dateStart, dateEnd} = this.props.educationXP;
        this.setState({
            education: education || "",
            major: major || "",
            dateStart: dateStart || "",
            dateEnd: dateEnd || ""
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
    return (<form id="educationXP" onSubmit={(e: React.FormEvent )=>{
        e.preventDefault();
        const data = new FormData(e.target);
        let formData = {education: data.get("education"), major: data.get("major"), dateStart: data.get("date-start"), dateEnd: data.get("date-end")}        
        this.props.handleSubmit(e, formData)
    }}>
        <label htmlFor="education" >Educational Institution</label>
        <input id="education"  name="education" type="text" value={this.state.education} onChange={this.handleChange}/>
        <label htmlFor="major" >Major/Focus</label>
        <input id="major"  name="major" type="text" value={this.state.major} onChange={this.handleChange}/>
        <label htmlFor="date-start">Start Date</label>
        <input id="date-start" name="date-start" type="date" value={this.state.dateStart} onChange={this.handleChange}/>
        <label htmlFor="date-end">End Date</label>
        <input id="date-end" name="date-end" type="date" value={this.state.dateEnd} onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
    </form>)
    }
}

export default EducationForm;
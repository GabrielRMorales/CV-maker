import React, {Component} from "react";

class GeneralInfoForm extends Component {
    //error about uncontrolled to controlled was simply due to just that. These just needed to be controlled components
   constructor(props){
       super(props);
       this.state={
        name: "",
        email: "",
        phone: ""
       }
       this.handleChange= this.handleChange.bind(this);
    }
//general info form (name, email, phone)
//save in state as generalInfo: {name, email, phone}
    componentDidMount(){
        const {name, email, phone} = this.props.generalInfo;
        this.setState({
            name: name || "",
            email: email || "",
            phone: phone || ""
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
render(){
    return (<form id="generalInfo" onSubmit={(e: React.FormEvent)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        let formData = { name: data.get("name"), email: data.get("email"), phone: data.get("phone")}
        this.props.handleSubmit(e, formData);
        }}>
        <label htmlFor="name" >Name</label>
        <input id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" name="phone" type="number" value={this.state.phone} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
    </form>);
}
}

export default GeneralInfoForm;
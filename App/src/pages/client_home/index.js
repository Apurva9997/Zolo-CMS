import React from 'react'
import '../../components/bootsrap/bootstrap.min.css'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            city: '',
            locality: '',
            description: '',
            location: '',
            landmark1: '',
            landmark2: '',
            allhostels:JSON.parse(localStorage.getItem('hostels'))
        }
    }
    handleSubmit =()=>{
        //this.setState({
        //    allhostels:JSON.parse(localStorage.getItem('hostels'))
        //})
        //console.log("processing")
        let nameval = this.state.name
        let cityval = this.state.city
        let localityval = this.state.locality
        let descriptionval = this.state.description
        let locationval = this.state.location
        let landmark1val = this.state.landmark1
        let landmark2val = this.state.landmark2
        if (nameval !== null && nameval !== "" && cityval !== null && cityval !== "" && localityval !== null && cityval !== "" && localityval !== null && localityval !== "" && descriptionval !== null && descriptionval !== "" && locationval !== null && locationval !== "" && landmark1val !== null && landmark1val !== "" && landmark2val !== null && landmark2val !== "") {
            let newObj = {
                name: nameval,
                city: cityval,
                locality: localityval,
                description: descriptionval,
                location: locationval,
                landmark1: landmark1val,
                landmark2: landmark2val,
            }
            this.setState({
                allhostels:[...this.state.allhostels,newObj]
            },()=>{
                let data = JSON.stringify(this.state.allhostels)
                localStorage.setItem("hostels", data)})
            alert('Hostel added successfully')
            window.location.reload()
        }
        else {
            alert('All fields are mandatory')
        }
    }
    render(){
        return(
            <div className="container">
                <br/>
                <legend>Add Pg/Hostel</legend>
                <table className="table text-center table-md-8 table-lg-8 table-sm-12 table-xs-12 table-hover table-bordered table-striped">
                    <tbody>
                    <tr>
                        <td><input type="text" onChange={(e) => this.setState({name: e.target.value})}
                                               className="form-control col-lg-6 col-md-6 col-sm-12 col-xs-12 input-lg" placeholder="Name"
                                               required=""/></td>
                    </tr>
                    <tr>
                        <td><input type="text" onChange={(e)=>this.setState({city:e.target.value})} className="form-control col-lg-6 col-md-6 col-sm-12 col-xs-12 input-lg" placeholder="City" required=""  /></td>
                    </tr>
                    <tr>
                        <td><input type="text" onChange={(e)=>this.setState({locality:e.target.value})} className="form-control col-lg-6 col-md-6 col-sm-12 col-xs-12 input-lg" placeholder="Locality" required=""/></td>
                    </tr>
                    <tr>
                        <td><textarea onChange={(e)=>this.setState({description:e.target.value})} className="form-control col-lg-6 col-md-6 input-lg" rows="4" plcaeholder="Description"/></td>
                    </tr>
                    <tr>
                        <td><input type="text" onChange={(e)=>this.setState({location:e.target.value})} className="form-control col-lg-6 col-md-6 input-lg" placeholder="GPS Location" required=""/></td>
                    </tr>
                    <tr>
                        <td><input type="text" onChange={(e)=>this.setState({landmark1:e.target.value})} className="form-control col-lg-6 col-md-6 input-lg" placeholder="Landmark1" required=""/></td>
                    </tr>
                    <tr>
                        <td><input type="text" onChange={(e)=>this.setState({landmark2:e.target.value})} className="form-control col-lg-6 col-md-6 input-lg" placeholder="Landmark2" required=""/></td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td><input type="button" onClick={this.handleSubmit} className="btn-lg btn-success col-lg-offset-3" value="Submit" placeholder="Username" required=""/></td>
                    </tr>
                    </tbody>
                </table>
                <input type="button" className="btn-lg btn-info" onClick={()=>{let win = window.open('/view_hostels', '_blank');
                    win.focus();}} value="View Hostels"/>
            </div>
        )
    }
}

export default App
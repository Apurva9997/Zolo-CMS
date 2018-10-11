import React from 'react'
import '../../components/bootsrap/bootstrap.min.css'
class App extends React.Component{
    constructor(props){
        super(props)
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        console.log("processing")
        e.preventDefault()
        console.log("Processing")
        if(this.state.username!=null && this.state.username!="" && this.state.password!=null && this.state.password!=""){
            localStorage.setItem('username',this.state.username)
            localStorage.setItem('password',this.state.password)
            alert('Sign up successful')
            window.location.replace('/login')
        }
        else{
            alert('All fields are required')
        }
    }
    render(){
        return(
            <div className="container">
                <br/>
                <legend>Signup</legend>
                <table className="table table-md-8 table-lg-8 table-sm-12 table-xs-12 table-hover table-bordered table-striped">
                    <tr>
                        <td colspan="2"><input type="text" onChange={(e)=>this.setState({username:e.target.value})} className="col-lg-4 col-md-6 col-sm-12 col-xs-12" placeholder="Username" required=""  /></td>
                    </tr>
                    <tr>
                        <td><input type="password" onChange={(e)=>this.setState({password:e.target.value})} className="col-lg-4 col-md-6 col-sm-12 col-xs-12" placeholder="Password" required=""/></td>
                    </tr>
                    <tr>
                        <td><input type="password" className="col-lg-4 col-md-6" placeholder="Confirm Password" required=""/></td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td><input type="submit" onClick={this.handleSubmit} className="btn-lg btn-success col-lg-offset-3" value="Submit" placeholder="Username" required=""/></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default App
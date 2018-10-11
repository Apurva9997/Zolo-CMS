import React from 'react'
import '../../components/bootsrap/bootstrap.min.css'
class App extends React.Component{
    constructor(props){
        super(props)
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        console.log("Processing")
        if(this.state.username!=null && this.state.username!="" && this.state.password!=null && this.state.password!=""){
            if(localStorage.getItem('username') === this.state.username && localStorage.getItem('password') === this.state.password){
                window.location.replace('/client_home')
            }
            else{
                alert('Incorrect credentials')
            }
        }
        else{
            alert('All fields are required')
        }
    }
    render(){
        return(
            <div className="container">
                <br/>
                <table className="table table-md-8 table-lg-8 table-sm-12 table-xs-12 table-hover table-bordered table-striped">
                    <legend>Login</legend>
                    <tr>
                        <td><input type="text" onChange={(e)=>this.setState({username:e.target.value})} className="form-control col-lg-4 col-lg-offset-3 input-lg" placeholder="Username" required=""  /></td>
                    </tr>
                    <tr>
                        <td><input type="password" onChange={(e)=>this.setState({password:e.target.value})} className="form-control col-lg-4 col-lg-offset-3 input-lg" placeholder="Password" required=""/></td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td><input type="submit" onClick={this.handleSubmit} className="btn-md btn-successcol-lg-offset-3" value="Submit" placeholder="Username" required=""/></td>
                    </tr>
                </table>
                <h3><a href="/signup" className="btn-md btn-warning">Don't have an account create one</a></h3>
            </div>
        )
    }
}

export default App
import React from 'react'
import '../../components/bootsrap/bootstrap.min.css'
class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            allhostels:[]
        };
    }
    componentWillMount(){
        let data = JSON.parse(localStorage.getItem('hostels'))
        this.setState({allhostels:data})
    }
    render(){
        return(
            <div>
                <div className="page-header text-center font-weight-bold">
                    <h1>Zolo Hostels</h1>
                    <hr />
                </div>
                <div className="row">
                {this.state.allhostels.map((list,index)=>{return(
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="jumbotron" style={{backgroundColor:'rebeccapurple',color:'white'}}>
                        <h2 className="font-weight-bold text-center text-capitalize">{list.name}</h2>
                        <h3>City : {list.city}</h3>
                        <h3>Locality : {list.locality}</h3>
                        <h3>Description : {list.description}</h3>
                        <h3>Location : {list.location}</h3>
                        <h3>Landmark 1 : {list.landmark1}</h3>
                        <h3>Landmark 2 : {list.landmark2}</h3>
                    </div>
                    </div>
                )})}
            </div>
            </div>
    )
    }
}

export default App
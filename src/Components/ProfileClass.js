import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            count:1,
        }
    }
    render(){
         console.log(this.props.data);
        return(
            <div className="flex justify-center align-center items-center gap-11">
                {/* <h2> This is a Class Component , its actually work like Functional Component and its has life cycle and the order of execution --  {"Constructor => Render => ComponentDidMount"} </h2> */}
                {/* <h1 className="">Github Profile</h1> */}
                <img src={this.props.data.avatar_url} className="w-80 rounded-lg py-8" />
                <div className="flex flex-col gap-5">
                <h2 className="text-bold">🔹{this.props.data.name}</h2>
                <h4 className="w-96">🧬 {this.props.data.bio}</h4>
                <h4>📍 {this.props.data.location}</h4>
                <p>🕊️following:{this.props.data.following}</p>
                <p>🕊️followers:{this.props.data.followers}</p>
                </div>
                {/* <p>The State Variable : {this.state.count}</p> */}
                {/* <button onClick={()=> this.setState({
                    count: 2,
                })}>count</button> */}
            </div>
        )
    }
    async componentDidMount(){
        
    }
}

export default Profile;
import React from 'react'
import { Outlet } from 'react-router-dom';
import Profile from "./ProfileClass";
class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profileInfo:{
        name:"",
        location:"",
        id:"",
        bio:"",
        avatar_url:"",
      }
    }
  }

  render(){
    return(
      <div className="pt-11 h-screen bg-pink-200">
      {/* <h2> This the About Page, when we do nested routing every content run inside the outlet component Only</h2> */}
      {/* <h1>{this.state.profileInfo.name}</h1> */}
      <Outlet/>
      <Profile data ={this.state.profileInfo} />
    </div>
    )
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/gokulr83");
    const json = await data.json();
    // console.log(json);
    // console.log(data);
    this.setState({
      profileInfo: json,
    })
  }
}

export default About;
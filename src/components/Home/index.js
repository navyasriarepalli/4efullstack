
import { Component } from 'react'
import Scheduler from '../Scheduler'
import './index.css'

class Home extends Component{
    state={click:""}

    onClickBtn=()=>{
        const {click}=this.state
        if(click==="Yes"){
            this.setState({click:"No"})
        }
        this.setState({click:"Yes"})
        

    }
    render(){
        const {click}=this.state
        return(
            <div className="home-bg">
    
                <button type="button" onClick={this.onClickBtn} className='home-cont'>Schedule a Meeting</button>
                {click==="Yes"?<div className='home-scheduler'><Scheduler /></div>:""}
                
                
            </div>
        )

    }
    

}


export default Home
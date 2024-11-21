import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginPage extends Component{
    state={mainHead:"SignUp",name:"",userName:"",email:"",password:"",register:""}
    onChangeName=event=>{
        this.setState({name:event.target.value})

    }
    renderName=()=>{
        return(
            <div className='login-det'>
            <label htmlFor='name'>Name :</label>
            <input type="text" id='name' className='login-inp-cont' onChange={this.onChangeName} placeholder='Enter Your Name'/>
            </div>
        )
    }
    onChangeUsername=event=>{
        this.setState({userName:event.target.value})

    }

    renderUsername=()=>{
        return(
            <div className='login-det'>
            <label htmlFor='Username'>Username :</label>
            <input type="text" id='Username' className='login-inp-cont' onChange={this.onChangeUsername} placeholder='Enter Your UserName'/>
            </div>
        )
    }
    onChangePassword=event=>{
        this.setState({password:event.target.value})

    }

    renderPassword=()=>{
        return(
            <div className='login-det'>
            <label htmlFor='password'>Password : </label>
            <input type="'password" id="password" className='login-inp-cont' onChange={this.onChangePassword} placeholder='Enter Your Password'/>
            </div>
        )
    }
    onChangeEmail=event=>{
        this.setState({email:event.target.value})

    }

    renderEmail=()=>{
        return(
            <div className='login-det'>
            <label htmlFor='email'>Email-id :</label>
            <input type="text" id="email" className='login-inp-cont' onChange={this.onChangeEmail} placeholder="Enter Your Email-id"/>
            </div>
        )
    }

    onClickSignup=()=>{
        this.setState({mainHead:"SignUp"})
        const {name,userName,password,email}=this.state
        console.log(name,userName,password,email)
    }
    onClickSignIn=()=>{
        this.setState({mainHead:"SignIn"})
        const {name,userName,password,email}=this.state
        console.log(name,userName,password,email)
    
    }
    

    onSubmitForm=async event=>{
        event.preventDefault()
        const {name,userName,email,password}=this.state
        const userDetails={
            name,userName,email,password
        }
        const url="http://localhost:3000/users/"
        const options={
            method:'POST',
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(userDetails)
        }
        
        try{
            const response=await fetch(url,options);
            const data=await response.json();
            console.log(response)
            if(response.ok===true){
                this.setState({register:"User Registered Successfully"})
                console.log("success")
    
            }
            else{
                this.setState({register:data.message})
                console.log(data.message)
    
    
            }

        }
        catch(error){
            console.log("Error occured:",error);
            this.setState({register:"Already Registered or An error ocurred. Please try again."})
        }

        

    }

    onSubmitSuccess = jwtToken => {
        const {history} = this.props
        console.log(jwtToken)
    
        Cookies.set('jwt_token', jwtToken,{
            expires: 30,
            path: '/',
        })
        history.push('/home')
        
        
    }

    onSubmitFailure = errorMsg => {
        console.log(errorMsg)
        this.setState({showSubmitError: true, errorMsg})
      }

    onSubmitFormSign=async event=>{
        event.preventDefault()
        const {userName,password}=this.state
        const userDetails={
            userName,password
        }
        const url="http://localhost:3000/login"
        const options={
            method:'POST',
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(userDetails)
        }
        
        try{
            const response=await fetch(url,options);
            const data=await response.json();
            console.log(response)
            if(response.ok===true){
                
                console.log("success Login")
                
                this.onSubmitSuccess(data.jwt_token)
    
            }
            else{
                this.setState({register:data.message})
                console.log(data.message)
                this.onSubmitFailure(data.error_msg)
    
    
            }

        }
        catch(error){
            console.log("Error occured:",error);
            this.setState({register:"Already Registered or An error ocurred. Please try again."})
        }

        

    }
    
    
    render(){
        const {mainHead,register}=this.state
        return(
            <div className='login-bg'>
                <div className='login-first-cont'>
                <p>If you are new User, Click SignUp Else Click SignIn.</p>
                <button type="button" className='login-btn' onClick={this.onClickSignup}>SignUp</button>
            
                <button type="button" className='login-btn'  onClick={this.onClickSignIn}>SignIn</button>
                </div>
                {mainHead==="SignUp"?<form className='login-form-cont' onSubmit={this.onSubmitForm}>
                <h1 className='login-head'>{mainHead}</h1>
                <div>{this.renderName()}</div>
                <div>{this.renderUsername()}</div>
                
                <div>{this.renderEmail()}</div>
                <div>{this.renderPassword()}</div>

                <div className='login-btn-cont'>
                    <button type="submit" className='login-btn' onClick={this.onClickSignup}>SignUp</button>
                </div>
                <p className='login-message'>{register}</p>
                
            </form>:<form className='login-form-cont' onSubmit={this.onSubmitFormSign}>
            <h1 className='login-head'>{mainHead}</h1>
            
            <div>{this.renderUsername()}</div>
            
            
            <div>{this.renderPassword()}</div>

            <div className='login-btn-cont'>
                
                <button type="submit" className='login-btn'  onClick={this.onClickSignIn}>SignIn</button>
            </div>
            <p className='login-message'>{register}</p>
            
        </form>}
                
            </div>
        )
    }
}

export default LoginPage
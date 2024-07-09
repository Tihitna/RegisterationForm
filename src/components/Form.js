import { useState } from "react"
function Form(){
  const [formData, setData]=useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password:"",
    config:""
  });
  const [errors, setErrors]=useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password:"",
    config:""
  })
  const change = (e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData(previousState=>({
      ...previousState,
      [name]: value
    }));
  }
  const validate=(data)=>{
    const newErrors={};
    const passwordRegexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$"); 
    if(data.firstName===""||data.email===""||data.phone===""||data.password===""||data.config===""||data.lastName===""){ 
      if(data.firstName===""){
        newErrors.firstName="First name missing";
      }
      if(data.lastName===""){
        newErrors.lastName="Last name missing";
      }
      if(data.phone===""){
        newErrors.phone="phone missing";
      }
      if(data.email===""){
        newErrors.email="email missing";
      }
      if(data.password===""){
        newErrors.password="Password missing";
      }
      if(data.config===""){
        newErrors.config="config Password missing";
      }
      
    }
    else{
     if(data.password!=data.config){
      newErrors.config="password doesn't match";
     }
    //  if(!passwordRegexp.test(data.password)){
    //   newErrors.password=" password should contain at least one uppercase, lowercase , number, special character and the total length of the password must be between 8 and 15. "
    //  }

    }
    setErrors(newErrors)
    return newErrors
    
  }
  const submitted = (e)=>{
    e.preventDefault();
    const formErrors = validate(formData);
    if(Object.keys(formErrors).length === 0){
      alert("Successfully Registered!")
    }
    
  }
    return(
        <div className='registration'>
        <h2>Registration Form</h2>
        <form onSubmit={submitted}>
          <label>Name:</label>
          <div className='row fullName'>
            <div className='col'>
              <input type='text' placeholder='First Name' value={formData.firstName} name="firstName" onChange={change}/>
              {errors.firstName && 
              <span className="error">{errors.firstName}</span>
              }
            </div>
            <div className='col'>
              <input type='text' placeholder='Last Name' value={formData.lastName} name="lastName" onChange={change}/>
              {errors.lastName && 
              <span className="error">{errors.lastName}</span>
              }
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <label>Email Address:</label>
              <input type='email' placeholder='example@gmail.com' value={formData.email} name="email" onChange={change}/>
              {errors.email && 
              <span className="error">{errors.email}</span>
              }
            </div>
            <div className='col'>
              <label>Phone Number:</label>
              <input type='number' placeholder='+25191111111' value={formData.phone} name="phone" onChange={change}/>
              {errors.phone && 
              <span className="error">{errors.phone}</span>
              }
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <label>Password:</label>
              <input type='password' placeholder='type your password' value={formData.password} name="password" onChange={change}/>
              {errors.password && 
              <span className="error">{errors.password}</span>
              }
            </div>
            <div className='col'>
              <label>Confirm Password:</label>
              <input type='password' placeholder='confirm Your password' value={formData.config} name="config" onChange={change}/>
              {errors.config && 
              <span className="error">{errors.config}</span>
              }
            </div>
          </div>
          <div className='row'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
}
export default Form
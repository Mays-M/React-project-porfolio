import React from 'react'
import './Hire.css'

const Hire = () => {
  return (
    <>
     
            <div className="f-form">
        <div className="f-form-card">
            <form action="https://formsubmit.co/wimmaforumfeedback@outlook.com" method="POST">
                <p className="f-form-p">Name</p>
                <input className="f-form-input-name" type="form-name" name="username" placeholder="Enter Your name" required/>
                <p className="f-form-p">Email</p>
                <input className="f-form-input-email" type="form-email" name="email" placeholder="Enter Your Email" required/>
                <p className="f-form-p">Message</p>
                <textarea className="f-form-input" type="form-text" name="text" placeholder="Enter your message . . ." required/>
                <div className="f-form-submit-parent">
                <button className="f-form-submit-child" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
            
            
          
      
        
      
      
    </>
  )
}

export default Hire

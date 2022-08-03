import React from 'react';
import "../Styles/Header.css"

function Header() {
    return (
        <div className='header'>
            <div className='title'> FIND THE MEANING</div>
            <div className='input'>
            <form>
 
  <div className="form-group">
    
    <input type="name" className="input" id="exampleInputPassword1" placeholder="enter the word" />
  </div>

  <button type="submit" className="button" >Submit</button>
</form>
            </div>
        </div>
    );
}

export default Header;
import React from 'react';

export default function Contact(){
    return(
        <div className="container col-5">
        <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>
  
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
</div>
    )
}
import styles from "./FormPlace.module.css"
let FormPlace =()=>
    {
        return (
       <div className='pers-info'>

<h2>Personal Information</h2>


        <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label , lefty">Full Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Full Name"></input>
</div>


<form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input placeholder="Enter email address" type="email" className="form-control" id="inputEmail4"></input>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Phone Number</label>
    <input placeholder="+91" className="form-control" id="inputPassword4"></input>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
 
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"></input>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"></input>
  </div>

  
</form>

       </div>
        )
    }
    export default FormPlace;
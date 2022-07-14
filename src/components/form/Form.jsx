import * as React from 'react';
import "./form.css"
import { Button } from "@material-ui/core"
import { InputAdornment } from '@material-ui/core';
import { TextField} from "@material-ui/core"
import { AccountCircle,AccountBox,Email,Phone,LocationOn} from '@material-ui/icons';



export default function Form() {
  const [fname,setFname] = React.useState("");
  const [lname,setLname] = React.useState("");
  const [dname,setDname] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [phone,setPhone] = React.useState("");
  const [location,setLocation] = React.useState("");

  function resethandler() {
        setDname("");
        setFname("");
        setLname("");
        setEmail("");
        setLocation("");
        setPhone("");
  }

  const handler = async() => {
    if(fname !== "" || lname !== "" || dname !== "" || email !== "" || phone !== "" || location !== ""){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      fetch("https://kyro-user-service-mgmqxruica-uc.a.run.app/users", {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(
          {
            email: email,
            first_name: fname,
            last_name: lname,
            image_url: "6u07gvfsa4oe6.png",
            display_name: dname,
            phone: [
              {
                type: "home",
                number: phone
              },
              {
                type: "office",
                number: "78763781567564"
              }
            ],
            primary_location: location,
            preferences: [],
            projects: null,
            roles: [
              "SDE",
              "Admin"
            ],
            organization: "62b9afb108bb8e6bf8c1a0d8",
            status: "Complete",
            last_updated_at: "2022-07-10T17:26:53.092000",
            last_updated_by: {
              id: "system",
              display_name: "system"
            }
          }
        ),
        redirect: 'follow'
      })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      setTimeout(() => {
        setDname("");
        setFname("");
        setLname("");
        setEmail("");
        setLocation("");
        setPhone("");
        alert("Success!")
      },2000)
    }
    else{
      alert("Please fill those details")
    }
  }
    
  return (
    
    <div className="form">
       <div className="profile">
        <h3>Good Morning ,Buvi</h3>
       </div>
       <div className="profile1">
        <p>April 28 , 2001</p>
       </div>
       <br></br>
       <hr />
       <br />
       <div className="myprofile">
        <h3>My Profile</h3>
       </div>
        <br />
     <form>
      <div className='size'>
       <div className='flex1'>
       <div className="fname">
       <TextField
        style ={{width: '250px'}}
        id="input-with-icon-textfield"
        label="FirstName"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onChange={(event) => setFname(event.target.value)}
        value={fname}
      />
       </div>

       <div className="lname">
       <TextField
        style ={{width: '250px'}}
        id="input-with-icon-textfield"
        label="Last Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onChange={(event) => setLname(event.target.value)}
        value={lname}
      />
      </div>
      </div>

       <div className="flex2">
        <div className="dname">
        <TextField
        style ={{width: '250px'}}
        id="input-with-icon-textfield"
        label="Display Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBox/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onChange={(event) => setDname(event.target.value)}
        value={dname}
      />
        </div>

        <div className="email">
        <TextField
        style ={{width: '250px'}}
        id="input-with-icon-textfield"
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
        </div>
       </div>

       <div className="flex3">
        <div className="phone1">
        <TextField
        style ={{width: '250px'}}
        id="input-with-icon-textfield"
        label="Phone No"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Phone/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onChange={(event) => setPhone(event.target.value)}
        value={phone}
      />
        </div>

        <div className="loc">
        <TextField
        style ={{width: '250px'}}
        id="input-with-icon-textfield"
        label="Location"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOn/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onChange={(event) => setLocation(event.target.value)}
        value={location}
      />
        </div>
       </div>
       
       <div className="btn">
       <Button variant="contained" color="primary" onClick={handler}>
        Save Change
        <br />
       </Button>

       <div className="btn2">
       <Button variant="contained" color="secondary" onClick={resethandler}>
        Reset
        <br />
       </Button>
       
       </div>
       </div>
       </div>
    </form>
    </div>
  )
}
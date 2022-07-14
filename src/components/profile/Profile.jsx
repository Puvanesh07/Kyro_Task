import React, { Component } from 'react';
import { Button } from "@material-ui/core"
import "./profile.css"
import {CameraEnhanceRounded} from "@material-ui/icons";

export class Profile extends Component {
  state={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { profileImg} = this.state
		return (
			<div className="profile11">
                <div className="flex11">
                     <div className="btn1">
                         <Button variant="contained" color="secondary">
                              + Add Projects
                         </Button>
                     </div> 
                       {/* <div>
                         <img src={Logo} alt="Logo"  className="topav"/>
                      </div>  */}
                 </div>

                 <div className="page">

                        <div className="img-holder">
                            <img src={profileImg} alt="" id="img" className="img" />
                        </div>
                        <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                        <div className="label">
                             <label className="image-upload" htmlFor="input">
                                 <i className="material-icons"></i>
                                 <CameraEnhanceRounded style ={{width: '30px'}}>
                                 </CameraEnhanceRounded>

                             </label>
                         </div>
                    </div>
                </div>
            

		)

        }
	
}

export default Profile;

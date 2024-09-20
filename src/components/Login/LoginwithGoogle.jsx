import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { baseURL } from '../../constants/constants';
function LoginwithGoogle() {

    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse)
            console.log(codeResponse);    
          axios
            .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`, {
                headers: {
                    Authorization: `Bearer ${codeResponse.access_token}`,
                    Accept: 'application/json'
                }
            })
            .then((res) => {
                setProfile(res.data);
                console.log(res.data);
                axios.post(`${baseURL}quicktoken/api/patient/loginwithgoogle/`,{
                    username:res.data.given_name,
                    email:res.data.email,
                    googleId:res.data.id
                }).then((respon)=>{
                    console.log(respon);
                })
                .catch((err)=>{
                    console.log(err);
                })
            })
            .catch((err) => console.log(err));
        },
        onError: (error) => console.log('Login Failed:', error)
        
    });
   
    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
      
        googleLogout();
        setProfile(null);
    };
  return (
    <div>
                       
    <p  onClick={async() =>{ 
        
       await login()
   
    }}><img src="https://i.postimg.cc/jj9VZbgs/icon-google.png" width='50px' height='50px' alt="GOOGLE"/>
        Google</p>

</div>
  )
}

export default LoginwithGoogle
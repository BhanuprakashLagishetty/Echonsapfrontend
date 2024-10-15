import { jwtDecode } from 'jwt-decode'; 
const isTokenExpired=(token)=>{
    if(!token)
    {
        return true
    }
  try{
    const decoded=jwtDecode(token);
    const currentTime=Date.now()/1000
    console.log(decoded.exp,"Time")
    console.log(currentTime,"currentTime")
    return decoded.exp < currentTime;
  }
  catch(error)
  {
    return true
  }
}
export {isTokenExpired}



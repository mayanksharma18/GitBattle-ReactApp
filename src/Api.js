

const axios=require ('axios');
//promised based node js library for making async http requests 
 
const fetchProfile= (x)=>{ 
    return axios.get(`https://api.github.com/users/${x}`)
    .then((res)=>{
     return res.data
    }
    )
}

  

  export default fetchProfile;
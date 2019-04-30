import React from 'react';


import './App.css';
import fetchPopularRepos from './Api';


const lang=["Java","JavaScript","Python","RubyOnRails"]
class  App extends React.Component {
  state={
    language:"",
    data:[]
  }

  handleClick=(i)=>{
   this.setState({
     language:i
   })
  fetchPopularRepos(this.state.language)
  .then((res)=>{
    console.log(res.items)
  })

  }

  render(){
  return (
   <div>
     {lang.map((i)=>
       
         <li onClick={()=>this.handleClick(i) }>
           {i}
         </li>
       
     )}
   </div>
  )
}}

export default App;

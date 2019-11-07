import React from "react";


export default function AskaQuestionContainer(props) {

   console.log('checking props in AskaQuestionContainer',props.RandomStudent)
   if (!props.RandomStudent) return 'Loading'
   return (
       <div>
           <p>Random of Students Selected</p>
           {props.RandomStudent && <ul>{props.RandomStudent.map((data, index) => {
               return <li key={index} className="list-group-item">{data.fullName}
                  <img src = {data.imgUrl} alt="Not available"/>
               </li>
           })}</ul>}
           
       </div>
   )
  
}

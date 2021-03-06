import React from 'react';
import StateCard from './StateCard';
 
 export default function ByStateList({ states }) {

   const statesList = (
     <div className="row">
        { states.map(usa => <StateCard usa={usa} key={usa._id} />)}
     </div>
   );
   return (
      statesList
   );
 }
 
 ByStateList.propTypes = {
   states: React.PropTypes.array.isRequired
 }
import React from 'react';
import Examples from './Examples';
import { connect } from 'react-redux';


const ExamplesContainer = (props) => {
  return ( 
    <div className='examples-Container'>
      <Examples examplesPage={props.state.examplesPage}/>
    </div>
  );
}

let mapStateToProps = (state) =>{
  return {
    state: state,
  }
}



export default connect (mapStateToProps) (ExamplesContainer)



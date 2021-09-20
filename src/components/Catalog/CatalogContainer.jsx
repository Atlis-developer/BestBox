import React from 'react';
import Catalog from './Catalog';
import { connect } from 'react-redux';


const CatalogContainer = (props) => {
  return ( 
    <div className='catalog-Container'>
      <Catalog catalogPage={props.state.catalogPage}/>
    </div>
  );
}

let mapStateToProps = (state) =>{
  return {
    state: state,
  }
}



export default connect (mapStateToProps) (CatalogContainer)



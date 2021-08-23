import React, { useState } from "react";
import { useHistory } from 'react-router-dom';


const Stock = ({ logout }) => {
  const history = useHistory();

  const handleLogout = () => {
    logout(() => {
      history.push('/');
    })
  }

  return (<>
    <div>Stock</div>
  </>);
}

export default Stock;
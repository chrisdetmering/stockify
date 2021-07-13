import React from "react";
import { useHistory } from "react-router-dom";

const Home = ({ logout }) => {
  const history = useHistory();

  const handleLogout = () => {
    logout(() => history.push('/'));
  }


  return (
    <div>
      Home
    </div>
  );
}

export default Home;
import React from "react";
import Greeting from "../components/Greeting";
const Home = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <>
      <h1>This is the Home Page</h1>
      <Greeting logged_in={logged_in} current_user={current_user} />
    </>
  );
};

export default Home;

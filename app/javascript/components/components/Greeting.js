import React from 'react';
import Account from './Account';

const Greeting = ({ logged_in, current_user }) => {
  if (logged_in) {
    return (
      <div className='loggedIn'>
        <h1> LOGGED IN!</h1>
        <h1>{current_user.email}</h1>
        <Account/>
        <img src='https://media.tenor.com/sZAFBih2R54AAAAC/minions.gif' />
      </div>
    );
  }
  return (
    <div className='loggedOut'>
      <h1> Welcome!</h1>
      <h2>Please login to see what we have to offer!</h2>
      <img src='https://blog.learnyst.com/wp-content/uploads/2021/02/restrict-access-to-logged-in-users-on-wordpress-forms.jpg' />
    </div>
  );
};

export default Greeting;



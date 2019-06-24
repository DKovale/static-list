import React from 'react';

function User(props) {
  return (
    <div>
      <span>Company: </span> {props.data.company.name}
      <span>, City:</span> {props.data.address.city}
      <span>, Name:</span> {props.data.name}
    </div>
  );
}

export default User;

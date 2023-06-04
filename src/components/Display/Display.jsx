import React, { useState, useEffect } from "react";
import "./display.css";

function Display() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="main__body">
      <h1>Blog Posts</h1>
      <ul className="user__display">
        {users.map((user) => (
          <li key={user.id} className="list__body">
            <div className="first__body">
              <h2>Name :{user.name}</h2>
              <p>Email : {user.email}</p>
              <p>Street : {user.address.street}</p>
              <p>Suite : {user.address.suite}</p>
              <p>City : {user.address.city}</p>
            </div>    

            <div className="second__body">
                <h2 className="">{user.name.split(' ').map((n) => n[0]).join('').toUpperCase()}</h2>
              <h3 className="user__username">UserName : {user.username}</h3>         
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Display;
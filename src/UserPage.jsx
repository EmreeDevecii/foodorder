import React, { useEffect, useState } from "react";
import axios from "axios";

function UserPage() {
  const API = "http://localhost:5000/getUsers";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(API).then((res) => setUsers(res.data));
  }, [users]);
  return (
    <div>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-6">
            <div className="card" style={{ width: "18rem" }}>
              <img src={user.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">username: {user.username}</p>
                <p className="card-text">age: {user.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPage;

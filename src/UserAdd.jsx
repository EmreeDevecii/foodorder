import axios from "axios";
import React, { useState } from "react";

function UserAdd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [userName, setUserName] = useState("");
  const [img, setImg] = useState("");

  const addUserHandler = () => {
    axios
      .post("http://localhost:5000/createUser", {
        name: name,
        age: age,
        username: userName,
        img: img,
      })
      .then(alert("Kullanıcı ekleme başarılı"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>YENİ KULLANICI EKLEME PANELİ</h2>
      <table className="table table-dark">
        <tbody>
          <tr>
            <td>
              <input
                className="form-control"
                type="text"
                placeholder="Adınızı Giriniz"
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                className="form-control"
                type="text"
                placeholder="Kullanıcı Adınızı Giriniz"
                onChange={(e) => setUserName(e.target.value)}
              />
            </td>
            <td>
              <input
                className="form-control"
                type="number"
                placeholder="Yaşınızı Giriniz"
                onChange={(e) => setAge(e.target.value)}
              />
            </td>
            <td>
              <input
                className="form-control"
                type="text"
                placeholder="Resim Linki Giriniz"
                onChange={(e) => setImg(e.target.value)}
              />
            </td>
            <td>
              <button
                className="btn btn-warning w-100"
                onClick={addUserHandler}
              >
                KAYDET
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserAdd;

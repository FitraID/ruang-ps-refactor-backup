import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { deleteSwal } from "../../helper/swal";

export default function UserManagement() {
  const [sampleUser, setSampleUser] = useState([]);
  useEffect(() => {
    let userArr = [];

    for (let i = 1; i <= 5; i++) {
      userArr.push({
        id: i,
        name: `User ${i}`,
        hp: "08123456789",
        password: "pass123",
      });
    }
    setSampleUser(userArr);
  }, []);

  return (
    <>
      <div>
        <div className="mb-5">
          <h3 className="title">Management User</h3>
        </div>
      </div>
      <div className="mb-5">
        <div className="card-primary">
          <div className="mb-3 ">
            <div className="lg:flex justify-between items-center">
              <div className="text-xl mb-3">Menu Makanan & Minuman</div>
              <NavLink to={"/user-management/add-new"}>
                <button className="button-primary">Tambah User</button>
              </NavLink>
            </div>
          </div>
          <div className="mb-3 table-container">
            <table className="table-primary five-col-2">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>No Hp</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {sampleUser.map((data, index) => (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.password}</td>
                    <td>{data.hp}</td>
                    <td>
                      <div className="flex gap-3">
                        <NavLink to={`edit/${data.id}`}>
                          <button className="bg-green-600 hover:bg-green-500 active:bg-green-700 px-5 py-1 rounded-lg cursor-pointer">
                            Edit
                          </button>
                        </NavLink>
                        <button
                          onClick={deleteSwal}
                          className="bg-red-600 hover:bg-red-500 active:bg-red-700 px-5 py-1 rounded-lg cursor-pointer"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

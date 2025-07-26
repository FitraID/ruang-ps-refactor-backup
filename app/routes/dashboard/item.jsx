import { useEffect, useState } from "react";
import { NavLink } from "react-router";
export default function Item() {
  const [sampleMenu, setSampleMenu] = useState([]);
  const [samplePackage, setSamplePackage] = useState([]);

  useEffect(() => {
    let menuArr = [];
    let packageArr = [];

    for (let i = 1; i <= 5; i++) {
      menuArr.push({
        id: i,
        name: `Menu ${i}`,
        price: 20000,
        stock: 20,
      });

      packageArr.push({
        id: i,
        name: `Paket ${i}`,
        price: 20000,
        time: 60,
      });
    }
    setSampleMenu(menuArr);
    setSamplePackage(packageArr);
  }, []);

  return (
    <>
      <div>
        <div className="mb-5">
          <h3 className="title">Management Item dan Paket</h3>
        </div>
      </div>
      <div className="mb-5">
        <div className="card-primary">
          <div className="mb-3 ">
            <div className="lg:flex justify-between items-center">
              <div className="text-xl mb-3">Menu Makanan & Minuman</div>
              <NavLink to={"/item/add-new"}>
                <button className="button-primary">Tambah Item</button>
              </NavLink>
            </div>
          </div>
          <div className="mb-3 table-container">
            <table className="table-primary five-col  ">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Harga</th>
                  <th>Stok</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {sampleMenu.map((data, index) => (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.stock}</td>
                    <td>
                      <div className="flex gap-3">
                        <button className="bg-green-600 hover:bg-green-500 active:bg-green-700 px-5 py-1 rounded-lg cursor-pointer">
                          Edit
                        </button>
                        <button className="bg-red-600 hover:bg-red-500 active:bg-red-700 px-5 py-1 rounded-lg cursor-pointer">
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
      <div className="mb-5">
        <div className="card-primary">
          <div className="mb-3 ">
            <div className="lg:flex justify-between items-center">
              <div className="text-xl mb-3">Pilihan Paket Billing</div>
              <NavLink to={"/item/add-new"}>
                <button className="button-primary">Tambah Paket</button>
              </NavLink>
            </div>
          </div>
          <div className="mb-3 table-container">
            <table className="table-primary five-col">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Harga</th>
                  <th>Stok</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {samplePackage.map((data, index) => (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.stock}</td>
                    <td>
                      <div className="flex gap-3">
                        <button className="bg-green-600 hover:bg-green-500 active:bg-green-700 px-5 py-1 rounded-lg cursor-pointer">
                          Edit
                        </button>
                        <button className="bg-red-600 hover:bg-red-500 active:bg-red-700 px-5 py-1 rounded-lg cursor-pointer">
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

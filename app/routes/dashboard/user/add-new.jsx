import { NavLink } from "react-router";
export default function NewUser() {
  return (
    <>
      <div className="mb-5 flex justify-start">
        <NavLink to={"/user-management"}>
          <button className="back-button">Kembali</button>
        </NavLink>
        <div className="grow "></div>
      </div>
      <div className="card-primary">
        <div className="mb-5">
          <div className="text-xl/4">Tambah User Baru</div>
          <small>masukan detail item menu baru disini</small>
        </div>
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="mb-3">
            <div className="label">Nama</div>
            <input
              type="text"
              placeholder="Orangutan.."
              name=""
              className="form-control"
              id=""
            />
          </div>
          <div className="mb-3">
            <div className="label">Username</div>
            <input
              type="text"
              placeholder="Kenxo21.."
              name=""
              className="form-control"
              id=""
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="mb-3">
            <div className="label">Password</div>
            <input
              type="password"
              placeholder=""
              name=""
              className="form-control"
              id=""
            />
          </div>
          <div className="mb-3">
            <div className="label">No Hp</div>
            <input
              type="number"
              placeholder="20"
              name=""
              className="form-control"
              id=""
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-end gap-3">
            <button className="button-primary ">Simpan</button>
            <NavLink to={"/user-management"}>
              <button className="back-button">Batal</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

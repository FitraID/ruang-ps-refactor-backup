import { NavLink } from "react-router";
export default function EditItem({ params }) {
  return (
    <>
      <NavLink to={"/item"}>
        <div className="mb-5">
          <button className="back-button">Kembali</button>
        </div>
      </NavLink>
      <div className="card-primary">
        <div className="mb-5">
          <div className="text-xl/4">Edit Menu {params.id}</div>
          <small>masukan detail item menu baru disini</small>
        </div>
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="mb-3">
            <div className="label">Nama</div>
            <input
              type="text"
              placeholder="Roti Bakar.."
              name=""
              className="form-control"
              id=""
            />
          </div>
          <div className="mb-3">
            <div className="label">Stok</div>
            <input
              type="number"
              placeholder="20"
              name=""
              className="form-control"
              id=""
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="label">Harga</div>
          <input
            type="number"
            placeholder="2000"
            name=""
            className="form-control"
            id=""
          />
        </div>
        <div className="mt-5">
          <div className="flex justify-end gap-3">
            <button className="button-primary ">Simpan</button>
            <NavLink to={"/item"}>
              <button className="back-button">Batal</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

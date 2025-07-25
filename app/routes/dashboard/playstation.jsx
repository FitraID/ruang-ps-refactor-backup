import { useEffect } from "react";
import useGlobalStore from "../../helper/store";

export default function Playstation() {
  const konsoles = useGlobalStore((state) => state.listKonsol);
  useEffect(() => {
    console.log(konsoles);
  }, [konsoles]);
  return (
    <>
      <div className="mb-4">
        <div className="text-2xl font-semibold">Manajemen Playstation</div>
      </div>
      <div className="mb-5">
        <div className="card-primary">
          <div className="mb-3">
            <div>Tambahkan Konsol Baru</div>
          </div>
          <div className="mb-3">
            <div className=" gap-2">
              <div className="lg:max-w-96 w-full mb-3">
                <input
                  type="text"
                  placeholder="Switch..."
                  className="form-control"
                />
              </div>
              <button className="bg-blue-800 hover:bg-blue-700 active:bg-blue-900 cursor-pointer px-5 py-3 rounded">
                Tambah Konsol
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="card-primary">
          <div className="mb-3">
            <div>Daftar Konsol</div>
          </div>
          <div className="mb-3 overflow-x-auto w-[80vw] 2xl:w-full">
            <table className="table-primary min-w-[60em] w-full">
              <thead>
                <tr>
                  <th className="min-w-10 w-10">No</th>
                  <th className="">Nama</th>
                  <th className="min-w-40 w-40">Status</th>
                  <th className="min-w-20 w-20">Timer</th>
                  <th className="min-w-40 w-40">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {konsoles.map((data, index) => (
                  <tr key={data.id}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td
                      className={`font-semibold ${data.status.toLowerCase()}`}
                    >
                      {data.status}
                    </td>
                    <td>{data.timer}</td>
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

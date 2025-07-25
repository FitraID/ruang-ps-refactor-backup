import { useEffect, useState } from "react";

export default function Modal({ status, func }) {
  const [sampleData, setSampleData] = useState([]);
  const [sampleMenu, setSampleMenu] = useState([]);

  useEffect(() => {
    let totalArr = [];
    let totalMenu = [];
    for (let index = 1; index <= 10; index++) {
      totalArr.push({ id: index, name: `Paket ${index}` });
      totalMenu.push({ id: `mn${index}`, name: `Menu ${index}` });
    }

    setSampleMenu(totalMenu);
    setSampleData(totalArr);
  }, []);

  if (status == "available") {
    return (
      <>
        <div className="fixed z-20 w-screen h-screen flex justify-center items-center top-0 left-0">
          <div
            className="bg-black  opacity-40 w-screen h-screen fixed -z-10"
            onClick={() => func({ status: false, type: "new" })}
          ></div>
          <div className="p-10 rounded-xl text-white text-center bg-gradient-to-br from-[#263243] to-[#0B0F1A]">
            <h3>Pilih Opsi Bermain</h3>
            <div className="flex justify-between gap-5 my-4">
              <button
                className="p-[40px] bg-[#364A69] hover:bg-[#1D2D59] text-white rounded cursor-pointer text-[1em] transition-all"
                onClick={() => func({ status: false, type: "new" })}
              >
                Bermain Open
              </button>
              <button
                className="p-[40px] bg-[#364A69] hover:bg-[#1D2D59] text-white rounded cursor-pointer text-[1em] transition-all"
                onClick={() => func({ status: true, type: "select-package" })}
              >
                Bermain Paket
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "1em",
              }}
            >
              <button
                onClick={() => func({ status: false, type: "new" })}
                className="bg-[#d9534f] transition-all text-white py-1 px-5 cursor-pointer rounded"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else if (status == "select-package") {
    return (
      <>
        <div className="fixed z-20 w-screen h-screen flex justify-center items-center top-0 left-0">
          <div
            className="bg-black  opacity-40 w-screen h-screen fixed -z-10"
            onClick={() => func({ status: false, type: "new" })}
          ></div>
          <div className="p-10 rounded-xl text-white text-center bg-gradient-to-br from-[#263243] to-[#0B0F1A]">
            <div className="mb-3">
              <h3>Pilih Opsi Paket</h3>
            </div>
            <div className="max-h-[10rem] overflow-auto grid grid-cols-2 gap-3">
              {sampleData.map((data, index) => (
                <button
                  className="p-[40px] bg-[#364A69] hover:bg-[#1D2D59] text-white rounded cursor-pointer text-[1em] transition-all"
                  onClick={() => func({ status: false, type: "new" })}
                >
                  {data.name}
                </button>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "1em",
              }}
            >
              <button
                onClick={() => func({ status: false, type: "new" })}
                className="bg-[#d9534f] transition-all text-white py-1 px-5 cursor-pointer rounded"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else if (status == "running") {
    return (
      <>
        <div className="fixed z-20 w-screen h-screen flex justify-center items-center top-0 left-0">
          <div
            className="bg-black  opacity-40 w-screen h-screen fixed -z-10"
            onClick={() => func({ status: false, type: "new" })}
          ></div>
          <div className="p-10 rounded-xl text-white text-center bg-gradient-to-br from-[#263243] to-[#0B0F1A]">
            <div>
              <div className="mb-3">
                <h3>Pesan Makanan & Minuman</h3>
              </div>
              <div className="mb-3">
                <div className="flex gap-2">
                  <div className="grow">
                    <input
                      type="text"
                      placeholder="Search Disini"
                      className="form-control"
                    />
                  </div>
                  <button className="bg-sideitem-active hover:bg-slate-700 rounded px-2 cursor-pointer">
                    <img src="glass.png" className="h-auto w-5" alt="" />
                  </button>
                </div>
              </div>
              <div className="max-h-[10rem] overflow-auto grid grid-cols-2 gap-3">
                {sampleMenu.map((data, index) => (
                  <button
                    key={data.id}
                    className="p-[40px] bg-[#364A69] hover:bg-[#1D2D59] text-white rounded cursor-pointer text-[1em] transition-all"
                    onClick={() => func({ status: false, type: "new" })}
                  >
                    {data.name}
                  </button>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "1em",
              }}
            >
              <button
                onClick={() => func({ status: false, type: "new" })}
                className="bg-[#d9534f] transition-all text-white py-1 px-5 cursor-pointer rounded"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

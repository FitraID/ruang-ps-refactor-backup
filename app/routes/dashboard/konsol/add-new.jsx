import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import Select from "react-select";

export default function NewDevice() {
  const [selectedInput, setSelectedInput] = useState([]);
  const options = [
    { value: "ip", label: "IP" },
    { value: "serial", label: "SERIAL" },
    { value: "online", label: "ONLINE" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#111",
      color: "#fff",
      borderColor: "#333",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#111",
      color: "#fff",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#222" : "#111",
      color: "#fff",
    }),
    input: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#bbb",
    }),
  };

  const inputList = [
    {
      type: "ip",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "",
        },
        {
          name: "ip",
          type: "text",
          placeholder: "",
        },
      ],
    },
    {
      type: "serial",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "",
        },
        {
          name: "serial",
          type: "text",
          placeholder: "",
        },
        {
          name: "secret",
          type: "text",
          placeholder: "",
        },
      ],
    },
    {
      type: "online",
      inputs: [
        {
          name: "name",
          placeholder: "",
          type: "text",
        },
        {
          name: "ip",
          type: "text",
          placeholder: "",
        },
        {
          name: "api",
          type: "text",
          placeholder: "",
        },
        {
          name: "unique-key",
          type: "text",
          placeholder: "",
        },
      ],
    },
  ];

  useEffect(() => {
    setSelectedInput(inputList.find((dt) => dt.type === "ip").inputs);
  }, []);

  useEffect(() => {
    console.log(selectedInput);
  }, [selectedInput]);

  function toggleInputs(type) {
    setSelectedInput(inputList.find((dt) => dt.type === type).inputs);
  }

  return (
    <>
      <NavLink to={"/playstation"}>
        <div className="mb-5">
          <button className="back-button">Kembali</button>
        </div>
      </NavLink>
      <div className="card-primary">
        <div className="mb-5">
          <div className="text-xl/4">Tambah Konsol Baru</div>
          <small>masukan detail konsol baru disini</small>
        </div>
        <div className="mb-3">
          <div className="label">Pilih Metode</div>
          <Select
            options={options}
            styles={customStyles}
            isSearchable={true}
            onChange={(val) => toggleInputs(val.value)}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-3">
          {selectedInput.map((data, index) => (
            <div className="mb-3">
              <div className="label capitalize">{data.name}</div>
              <input
                type={data.type}
                placeholder="2000"
                name={data.name}
                className="form-control"
                id={data.name}
              />
            </div>
          ))}
        </div>
        <div className="mt-5">
          <div className="flex justify-end gap-3">
            <button className="button-primary ">Simpan</button>
            <NavLink to={"/playstation"}>
              <button className="back-button">Batal</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

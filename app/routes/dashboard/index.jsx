import Card from "../../components/card";
import Modal from "../../components/modal";
import { useState } from "react";
import useGlobalStore from "../../helper/store";

export default function Dashboard() {
  const [modalStatus, setModalStatus] = useState({
    status: false,
    type: "new",
  });

  const [consoles, setConsoles] = useState([
    {
      id: 1,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Running",
      timer: "00:30",
    },
    {
      id: 2,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 3,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 4,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 5,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 6,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 7,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 8,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 9,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 10,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 11,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 12,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
  ]);

  //set Data on global

  //modal
  function showModal(type) {
    if (type) {
      setModalStatus({
        status: true,
        type: type,
      });
    } else {
      setModalStatus({
        status: false,
        type: "new",
      });
    }
    console.log(modalStatus);
  }
  return (
    <>
      {modalStatus.status == true ? (
        <Modal status={modalStatus.type} func={setModalStatus} />
      ) : (
        <></>
      )}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
        {consoles.map((data, index) => (
          <Card
            key={data.id}
            data={data}
            allData={consoles}
            toggleModal={showModal}
            updateConsole={setConsoles}
          />
        ))}
      </div>
    </>
  );
}

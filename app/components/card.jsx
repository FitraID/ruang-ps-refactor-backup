export default function Card({ allData, data, updateConsole, toggleModal }) {
  return (
    <>
      <div
        onClick={() => toggleModal(data.status.toLowerCase())}
        className="cursor-pointer transition-all hover:-translate-y-2 rounded-xl bg-gradient-to-br from-[#364A69] to-[#1D2D59] px-5 pb-5"
      >
        <div className="flex justify-center items-center py-18">
          <h3 className="text-xl">Playstation 3</h3>
        </div>
        <div className="flex justify-between font-light">
          <div>
            Status :{" "}
            <span
              className={`font-semibold ${data.status == "Running" ? "text-yellow-300" : "text-green-500"}`}
            >
              {data.status}
            </span>
          </div>
          <div>
            Timer : <span>02:00</span>
          </div>
        </div>
      </div>
    </>
  );
}

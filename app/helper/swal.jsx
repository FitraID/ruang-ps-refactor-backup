import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const deleteSwal = () => {
  withReactContent(Swal)
    .fire({
      titleText: "Hapus Item?",
      text: "Sekali Terhapus tidak bisa dipulihan",
      icon: "question",
      background: "#222222",
      showCancelButton: true,
      color: "#f5f5f5",
    })
    .then((result) => {
      if (result.isConfirmed) {
        withReactContent(Swal).fire({
          titleText: "Sukses",
          text: "Telah Menghapus Item",
          icon: "success",
          background: "#222222",
          color: "#f5f5f5",
        });
      }
    });
};

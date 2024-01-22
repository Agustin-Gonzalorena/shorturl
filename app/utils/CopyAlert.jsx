import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const CopyAlert = () => {
  MySwal.fire({
    title: "Copiado!",
    confirmButtonColor: "#0A7DC8",
    confirmButtonText: "Ok",
  });
};

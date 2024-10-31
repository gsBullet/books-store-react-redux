const Swal = require("sweetalert2");
const Success = ({message, icon}) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
    background: "#00FF000"
  });
  return Toast.fire({
    icon,
    title: message,
    background: icon ==="error"? "#FF0000" : "#03B300", 
    color: "#fff", // Set text color directly
    customClass: {
      popup: "border-radius-10px", // Apply custom class for border-radius
    },
  });
};

export default Success;

import swal from "sweetalert";

export const notify = (msg:string, color:string) =>
  swal({
    title: "Ghost Todo App",
    text: msg,
    icon: color,
    timer: 2000,
  });
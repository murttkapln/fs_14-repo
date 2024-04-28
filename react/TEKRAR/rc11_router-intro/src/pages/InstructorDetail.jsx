import { useLocation, useParams } from "react-router-dom"



const InstructorDetail = () => {
  // let param = useParams()
  //* Linkteki parametreyi almak için useParams Hook'u kullanılabilir.
  //* Yakalanan id'ye ait güncel veriler fetch yapılabilir.
  let {id} = useParams()
  // console.log({id});

  // let location = useLocation()
  let {state,pathname} = useLocation()
  // console.log(state,pathname);
  return (
   <div className="p-3">
    <p>
    from useParam istructor <span className="text-danger fw-bold">{id}</span>
    </p> <hr />
    <p>
    from useLocation istructor <span className="text-danger fw-bold"> {state.name}</span>
    </p> <hr />
    <p>
    your path is : {pathname}
    </p> 
   </div>
  )
}

export default InstructorDetail
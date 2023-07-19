import React from "react";
import { useLocation, useParams } from "react-router-dom";

const InstructorDetail = () => {
  let { id } = useParams();
  let {state,pathname} = useLocation()
  console.log({ id });
  return <div className="p-3">
    <p>
    from useParam istructor <span className="text-danger fw-bold">{id}</span>
    </p> <hr />
    <p>
    from useLocation istructor <span className="text-danger fw-bold">{state.name}</span>
    </p> <hr />
    <p>
    your path is : <span className="text-danger fw-bold">{pathname}</span>
    </p> 
    </div>;
};

export default InstructorDetail;

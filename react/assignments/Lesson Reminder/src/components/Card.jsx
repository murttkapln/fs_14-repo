import {data} from "../helper/data";

const Card = () => {
  return (
    <div className="row justify-content-around align-items-center flex-wrap ">
      {data.map((item) => {
        const { id, name, hour, image } = item;
        return (
          <div key={id} style={{height:"40vh"}} className="col-12 col-md-6 col-lg-4 card flex-row justify-content-around align-items-center">
            <div className="w-25">
              <img className="w-100" src={image} alt="" />
            </div>
            <div className="w-50">
              <p>Lesson Name:{name}</p>
              <p>Lesson Hour:{hour}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
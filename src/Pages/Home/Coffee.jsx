import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const Coffee = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, quantity, taste, photo } = coffee;

  const handleDeleted = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to be delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://premium-coffee-sever.vercel.app/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remainder = coffees.filter(coff => coff._id !== _id)
              setCoffees(remainder)
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 gap-5 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" className="w-40 " />
        </figure>
        <div className="flex justify-between gap-6 items-center">
          <div>
            <h2 className="">Name:{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Taste: {taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical">
              <button className="btn btn-active">Details</button>
              <NavLink to={`/update/${_id}`}>
              <button className="btn">Update</button>
              </NavLink>
              <button onClick={() => handleDeleted(_id)} className="btn">
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;

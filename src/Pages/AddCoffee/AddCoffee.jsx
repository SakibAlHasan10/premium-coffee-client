import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddedCoffee = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const addedCoffee = {name, quantity, supplier, taste, category, details, photo}
        fetch('https://premium-coffee-sever.vercel.app/coffees', {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(addedCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Create coffee successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            form.reset()
        })
    }
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h2 className=" text-4xl text-red-600 mt-6 font-semibold">Add Coffee</h2>
      <div className="mt-10">
        <form onSubmit={handleAddedCoffee}>
          <div className="flex gap-4 mb-6 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Coffee Name"
                  className="input  input-bordered input-secondary w-full"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered input-secondary w-full "
                />
              </label>
            </div>
          </div>
          <div className="flex gap-4 mb-6 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group w-full">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Supplier Name"
                  className="input  input-bordered input-secondary w-full"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  placeholder="Taste"
                  className="input input-bordered input-secondary w-full "
                />
              </label>
            </div>
          </div>
          <div className="flex gap-4 mb-6 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group w-full">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input  input-bordered input-secondary w-full"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Details"
                  className="input input-bordered input-secondary w-full "
                />
              </label>
            </div>
          </div>
          <div className="flex gap-4 mb-6 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Coffee Photo URL</span>
              </label>
              <label className="input-group w-full">
                <input
                  type="text"
                  name="photo"
                  placeholder="Coffee Photo"
                  className="input  input-bordered input-secondary w-full"
                />
              </label>
            </div>
            
          </div>
          <input type="submit" value="Add Coffee" className="btn w-full  btn-neutral" />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;

import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const AddJewelry = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=62f223108319240b757e72e19b2fe6b7`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            name,
            ownerName,
            ownerEmail,
            availablePieces,
            price,
          } = data;
          const newJewelry = {
            name,
            ownerName,
            ownerEmail,
            availableSeats: parseInt(availablePieces),
            price: parseFloat(price),
            image: imgURL,
            status: "pending",
            feedback: "",
            enrolled: 0,
          };
          console.log(newJewelry);
          axiosSecure.post("/jewelrys", newJewelry).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Dazzly | Add A Jewelry</title>
      </Helmet>
      <div className="w-full md:mx-32 mt-5 md:py-5">
        <h1 className="text-5xl text-center font-display font-semibold mb-5">
          Add A Jewelry
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Jewelry Name*</span>
            </label>
            <input
              type="text"
              placeholder="Jewelry Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex my-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Owner Name*
                </span>
              </label>
              <input
                type="text"
                {...register("ownerName", { required: true })}
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Owner Email*
                </span>
              </label>
              <input
                type="text"
                {...register("ownerEmail", { required: true })}
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex my-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Available Pieces*
                </span>
              </label>
              <input
                type="number"
                {...register("availablePieces", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text font-semibold">Jewelry Image*</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </div>
          <input className="btn btn-sm mt-4" type="submit" value="Add Jewelry" />
        </form>
      </div>
    </>
  );
};

export default AddJewelry;

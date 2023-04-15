import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/brands";

const getBrands = async (response) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL,
    });
    response(result.data);
  } catch (err) {
    console.log(err);
  }
};
const addBrand = async (response) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL,
      data: response,
    });
    Swal.fire("Add Brand", "Brand Has Been Adeed", "success");
    console.log(result.data);
  } catch (err) {
    console.log(err);
  }
};
const updateBrand = async (id, response) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "/" + id,
      data: response,
    });
    Swal.fire("Update Brand" + id, "Brand Has Been Updated", "success");
    console.log(result.data);
  } catch (err) {
    console.log(err);
  }
};
const deleteBrand = async (id) => {
  try {
    let result = await axios({
      method: "DELETE",
      url: URL + "/" + id,
    });

    Swal.fire("Delete Brand" + id, "Brand Has Been Deleted", "success");

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// const getDetail = async (id, response) => {
//   try {
//     let result = await axios({
//       method: "GET",
//       url: URL + "/detail/" + id,
//     });
//     response(result.data);
//   } catch (err) {
//     console.log(err);
//   }
// };

export { getBrands, addBrand, updateBrand, deleteBrand };

import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/items";

const getItems = async (response) => {
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
const addItem = async (response) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL,
      data: response,
    });
    Swal.fire("Add Item", "Item Has Been Adeed", "success");
    console.log(result.data);
  } catch (err) {
    console.log(err);
  }
};
const updateItem = async (id, response) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "/" + id,
      data: response,
    });
    Swal.fire("Edit Item" + id, "Item Has Been Edited", "success");
    console.log(result.data);
  } catch (err) {
    console.log(err);
  }
};
const deleteItem = async (id) => {
  try {
    let result = await axios({
      method: "DELETE",
      url: URL + "/" + id,
    });

    Swal.fire("Delete Item" + id, "Item Has Been Deleted", "success");

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};


export { getItems, addItem, updateItem, deleteItem };

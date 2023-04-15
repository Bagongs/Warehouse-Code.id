import React from 'react'
import { addItem } from "../axios/itemAxios";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
    const [form, setform] = useState({
        name: "",
        image: "http://localhost:3000/api/items/images/",
        receiving: "",
        category: "",
        userId: 0,
        brandId: 0,
    });

    const navigation = useNavigate()

    const submitHandler = () => {
        addItem(form)
        navigation('/')
    };

    return (
        <>
            <div className="my-3">
                <h3>Add Item Page</h3>
                <form>
                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                onChange={(e) => setform({ ...form, name: e.target.value })}
                                type="text"
                                className="form-control"
                                id="inputName"
                            ></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputImage" className="col-sm-2 col-form-label">
                            Image
                        </label>
                        <div className="col-sm-10">
                            <input
                                onChange={(e) => setform({ ...form, image: e.target.value })}
                                type="text"
                                className="form-control"
                                id="inputImage"
                            ></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputReceiving" className="col-sm-2 col-form-label">
                            Receiving
                        </label>
                        <div className="col input-group mb-3">
                            <span className="input-group-text">Rp</span>
                            <input
                                onChange={(e) => setform({ ...form, receiving: e.target.value })}
                                type="text"
                                className="form-control text-center"
                                id="inputReceiving"
                            ></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputCategory" className="col-sm-2 col-form-label">
                            Category
                        </label>
                        <div className="col-sm-10">
                            <input
                                onChange={(e) => setform({ ...form, category: e.target.value })}
                                type="text"
                                className="form-control"
                                id="inputCategory"
                            ></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputBrands" className="col-sm-2 col-form-label">
                            Brands
                        </label>
                        <div className="col-sm-10">
                            <select
                                onChange={(e) => setform({ ...form, brandId: e.target.value })}
                                id="inputBrands"
                                className="form-select"
                            >
                                <option defaultValue>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputState" className="col-sm-2 col-form-label">
                            User
                        </label>
                        <div className="col-sm-10">
                            <select
                                onChange={(e) => setform({ ...form, userId: e.target.value })}
                                id="inputState"
                                className="form-select"
                            >
                                <option defaultValue >1</option>
                                <option>2</option>
                            </select>
                        </div>
                    </div>
                    <button
                        onClick={() => submitHandler()}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddItem;
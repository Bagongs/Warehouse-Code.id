import React from 'react'
import { addBrand } from "../axios/brandAxios";
import { useNavigate } from "react-router-dom";

const AddBrand = () => {
    const [form, setform] = useState({
        name: "",
    });

    const navigation = useNavigate()

    const submitHandler = () => {
        addBrand(form)
        navigation('/')
    };
    return (
        <>
            <div className='bg-dark bg-opacity-10'>
                <h4 className=' bg-dark text-white text-center'>Add Brand</h4>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <div className="bg-light p-3 rounded">
                                <form>
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Name</label>
                                        <input 
                                        onChange={(e) => setform({ ...form, name: e.target.value })}
                                        type="text" className="form-control" id="name" />
                                    </div>
                                    <button
                                        onClick={() => submitHandler()}
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Add Brand
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddBrand
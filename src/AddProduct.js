import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function AddProduct()
{
    const [name, setName] = useState("")
    const [file, setFile] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const history = useHistory();

    // function upload(e)
    // {
    //     console.warn(e.target.files)
    // }

    async function addProduct()
    {
       console.warn(name, file, description, price)
        
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        
        let result = await fetch('http://localhost:8000/api/addProduct', {
            method: 'POST',
            body: formData
        });
        alert('Product has been added successfully!');
        history.push('/');
    }
    return (
        <div>
            <Header />
            <br />
            
        <div className="col-sm-6 offset-sm-3">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name"/><br />
            <input type="file"  onChange={(e) => setFile(e.target.files[0])} name="img" className="form-control" placeholder="file"/><br />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="description"/><br />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="price"/><br />
            <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
        </div>
       <Footer />
        </div>
    )
}

export default AddProduct;
import React, { useState, useEffect } from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'
import Footer from './Footer'

function UpdateProduct(props)
{
    console.warn('props',props.match.params.id);
    let id = props.match.params.id;
    const [data, setData] = useState([])
    useEffect( async () => {
        let result = await fetch('http://localhost:8000/api/product/'+props.match.params.id);
        result = await result.json();
        setData(result.data)
        console.warn(result.data);
    }, [])

    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Update Product Page</h1>
                <input type="text" className="form-control" defaultValue={data.name}/><br /><br />
                <input type="text" className="form-control" value={data.description}/><br /><br />
                <input type="text" className="form-control" value={data.price}/><br /><br />
                <input type="file" className="form-control" defaultValue={data.file_path}/><br /><br />
                <img src={"http://localhost:8000/"+data.file_path} alt="" srcset=""/><br /><br />
                <button className="btn btn-primary">Update</button>
            </div>
            <Footer />
        </div>
    )
}

export default withRouter(UpdateProduct);
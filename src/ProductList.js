import React,{ useState, useEffect } from 'react'
import Header from './Header'
import {Table} from 'react-bootstrap'
import Footer from './Footer'
function ProductList()
{

   const [data, setData] = useState([])
   useEffect(() => {
    getData()
   }, [])
   console.warn('data', data);

   async function deleteProduct(id)
   {
     let result =  await fetch('http://localhost:8000/api/delete/'+id, {
        method: 'DELETE'
     });
     result = await result.json();
     console.warn(result);
     getData()
   }
   async function getData()
   {
      let result = await fetch('http://localhost:8000/api/list');
      result = await result.json();
      setData(result)
   }

    return (
        <div>
            <Header />
            <div className="col-sm-8 offset-sm-2">
                <br />
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Image</th>
      <th>Description</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((item) => 
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td><img style={{width:100,height:100}} src={"http://localhost:8000/"+item.file_path}></img></td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td><span className="delete" onClick={() => {deleteProduct(item.id)}}>Delete</span></td>
        </tr>)
    }
  </tbody>
</Table>

</div>
<Footer />

        </div>
    )
}
export default ProductList;
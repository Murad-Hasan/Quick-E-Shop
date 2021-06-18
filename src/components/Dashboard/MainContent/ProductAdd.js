import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ProductAdd = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = (data) => {
        const eventData = {
            name: data.name,
            catagory: data.category,
            price: data.price,
            image: imageURL
        }
  
   const url = `https://quick-e-shop.herokuapp.com/addProduct`
        fetch(url, {
            method: 'POST' ,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => {
          alert('Add Successfully')
        })
        .catch(err => console.log(err))
    };
    
  
    const handleImageUpload = e => {
      const imageData = new FormData();
      imageData.set('key', '670ec3a6ba30609eb1aafc1fbf9ec529');
      imageData.append('image', e.target.files[0])
     //axios 
      axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(res=> {
          setImageURL(res.data.data.url)
          console.log('image Uploaded Successfully', res.data.data.url)
      })
      .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="manage__header px-4">
            <h2>Add A New Product</h2>
            </div>
           <div className="w-75 m-auto">
           <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control mb-2"  placeholder='Input name' {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
                <input className="form-control  mb-2"  placeholder='Input category' {...register("category", { required: true })} />
                {errors.category && <span>This field is required</span>}
                <input className="form-control  mb-2" placeholder='Input price' type="number" {...register("price", { required: true })} />
                {errors.price && <span>This field is required</span>}
               <input   className="form-control  mb-2" onChange={handleImageUpload} type="file"/>
               <input className="form-control btn btn-outline-success" type="submit"  value='Add Product'/>
            </form>
           </div>
  
        </div>
    );
};

export default ProductAdd;
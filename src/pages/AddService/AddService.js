import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
        .then(res =>{
           console.log(res);
        if (res.data.insertedId) {
            alert('added successfully')
            reset();
        }
        })
    };
    return (
        // this form is from react hook form
        <div id="/addService" className="add-service">
            <h1>Add a service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input {...register("name")} placeholder="Name"/>
               <input type="number" {...register("price")} placeholder="price" />
               <textarea {...register("description")} placeholder="Description"/>
               <input {...register("img")} placeholder="image url"/>
               <input type="submit" />
          </form>
        </div>
    );
};

export default AddService;
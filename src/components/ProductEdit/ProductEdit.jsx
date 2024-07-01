import React, { useContext, useState } from "react";
import logo from "../../assets/images/imagen-register.jpg";
import { useForm } from "react-hook-form";
import { ProductContext } from "../../context/product";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { formValidation } from "../../services/formValidation";
import { writeForm } from "../../services/writeForm";
import { Navigate } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";

function ProductEdit() {
  const { productE, setProductE } = useContext(ProductContext);
  const [registerValido, setRegisterValido] = useState();
  const { register, handleSubmit, setValue } = useForm();
  const [errors, setErrors] = useState({});
  const [action, setAction] = useState('put');
  const { categories } = useCategory();
  const location = useLocation()

  useEffect(() => {
    // Set the default values using setValue
    setValue("name", productE ? productE.name : "");
    setValue("description", productE ? productE.description : "");
    setValue("price", productE ? productE.price : "");
    if (productE && productE.id) {
      setValue("id", productE ? productE.id : "");
    }
    setValue("category", productE ? productE.categories.name : "default");
    
    if (productE && productE.id) {
      setAction("put");
    } else {
      setAction("post");
    }
  }, [categories, action]);

  useEffect(() => {
    if (location.state && location.state.product) {
      console.log(1);
      setProductE(location.state.product);
    }
  }, [location.state, setProductE]);
  
  const handleFormSubmit = (values) => {
    const errors = formValidation(values,action);
    setErrors(errors);
    setAction(null);
    if (
      Object.keys(errors).length === 0 &&
      Object.values(values).every((value) => value !== "")
    ) {
      const REGISTER_ENDPOINT = "http://localhost:3022/api/products";
      writeForm(values, errors, REGISTER_ENDPOINT, action).then((res) => {
        if (res == true) {
          setRegisterValido(true);
        } else {
          console.log(res);
          console.log("Error");
        }
      });
    }
  };

  if (registerValido == true) {
    return <Navigate to="/delivery" />;
  }

  return (
    <div className="container-fluid ">
      <img
        className="img m-5"
        style={{ width: "250px", height: "100%" }}
        src={logo}
        alt="logo"
      />

      <form className="g-3" onSubmit={handleSubmit(handleFormSubmit)}>
        {productE && productE.id ? (
          <input {...register("id")} style={{ display: "none" }}></input>
        ) : null}
        {productE && productE.image ? (
          <img
            src={productE && productE.image}
            className="img-thumbnail"
            style={{ width: "350px" }}
          ></img>
        ) : null}
        <div className="col-lg-3 col-md-6 col-sm-8 m-auto text-start mt-2">
          <label htmlFor="image" className="form-label text-warning">
            Sube la imagen del producto
          </label>
           { action == 'put'? <input
              className="form-control bg-warning"
              type="file"
              
            />: <input
            className="form-control bg-warning"
            type="file"
            {...register("image")}
          />}
        </div>
        {errors.image && <h6 className="text-warning">{errors.image}</h6>}
        <div className="col-lg-3 col-md-6 col-sm-8 m-auto mt-4 text-start">
          <input
            className="form-control form-control-lg bg-warning"
            placeholder="Nombre"
            type="text"
            {...register("name")}
            id="name"
          />
        </div>
        {errors.name && <h6 className="text-warning">{errors.name}</h6>}
        <div className="col-lg-3 col-md-6 col-sm-8 m-auto mt-4">
          <textarea
            style={{ height: "200px" }}
            className="form-control form-control-lg bg-warning"
            placeholder="Descripción"
            type="text"
            {...register("description")}
            id="description"
          />
        </div>
        {errors.description && (
          <h6 className="text-warning ">{errors.description}</h6>
        )}
        <div className="col-lg-3 col-md-6 col-sm-8 m-auto mt-4">
          <select
            className="form-select bg-warning"
            aria-label="select categories"
            id="category"
            {...register("category")}
          >
            <option value="default">Seleccione una categoría</option>
            {categories.map((category) => {
              return (
                <option value={category.category} key={category.category}>
                  {category.category}
                </option>
              );
            })}
          </select>
          {errors.category && (
            <h6 className="text-warning ">{errors.category}</h6>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-8 m-auto mt-4">
          <input
            className="form-control form-control-lg bg-warning"
            placeholder="Precio"
            type="text"
            {...register("price")}
            id="price"
          />
        </div>
        {errors.price && <h6 className="text-warning ">{errors.price}</h6>}
        <button
          className="btn btn-warning my-3"
          style={{ width: 150 }}
          type="submit"
        >
          Enviar
        </button>
      </form>
      <Link to="/delivery">
        <button
          className="btn btn-warning mb-3"
          style={{ width: 150 }}
          type="submit"
          value="Volver"
        >
          Volver
        </button>
      </Link>
    </div>
  );
}

export default ProductEdit;

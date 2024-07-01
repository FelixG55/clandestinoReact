export const formValidation = (formValues, action) => {
  const newErrors = {}; // Nuevo objeto de errores
  console.log(formValues);
  Object.keys(formValues).forEach((name) => {
    const value = formValues[name];
    switch (name) {
      case "name":
        if (!value) {
          newErrors[name] = "Debe introducir un nombre";
        } else if (value.length < 2) {
          newErrors[name] = "El nombre debe tener mínimo dos caracteres";
        } else {
          delete newErrors[name]; // Eliminar el error si no hay problemas
        }
        break;

      case "lastname":
        if (!value) {
          newErrors[name] = "Debe introducir un apellido";
        } else if (value.length < 2) {
          newErrors[name] = "El apellido debe tener mínimo dos caracteres";
        } else {
          delete newErrors[name];
        }
        break;

      case "email":
        if (!value) {
          newErrors[name] = "Debe introducir un correo";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors[name] = "Debe introducir un correo valido";
        } else {
          delete newErrors[name];
        }
        break;

      case "password":
        if (!value) {
          newErrors[name] = "Debe introducir una contraseña";
        } else if (value.length < 9) {
          newErrors[name] = "La contraseña debe tener 8 caracteres";
        } else if (!/[A-Z]/.test(value)) {
          newErrors[name] = "La contraseña debe tener una mayúscula";
        } else if (!/[a-z]/.test(value)) {
          newErrors[name] = "La contraseña debe tener una letra minúscula";
        } else if (!/\d/.test(value)) {
          newErrors[name] = "La contraseña debe tener un numero";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
          newErrors[name] = "La contraseña debe tener un carácter especial";
        } else {
          delete newErrors[name];
        }
        break;
      case "passwordLog":
        if (!value) {
          newErrors[name] = "Debe introducir una contraseña";
        } else {
          delete newErrors[name];
        }
        break;
      case "image":
        if (value.length === 0) {
          newErrors[name] = "Debe cargar una imagen";
        } else if (value[0].name) {
          const extension = value[0].name.split(".").pop().toLowerCase();
          console.log(extension);
          const extensionPerm = ["jpg", "jpeg", "png", "gif"];
          if (!extensionPerm.includes(extension)) {
            newErrors[name] =
              `Las extensiones permitidas son ${extensionPerm.join(", ")}`;
          }
        } else {
          delete newErrors[name];
        }
        break;
      case "price":
        if (!value) {
          newErrors[name] = "Debe introducir un precio";
        } else if (isNaN(value)) {
          newErrors[name] = "El precio debe ser un número";
        } else if (value < 0) {
          newErrors[name] = "El precio debe ser positivo";
        } else {
          delete newErrors[name];
        }
        break;
      case "description":
        if (!value) {
          newErrors[name] = "Debe introducir una descripción";
        } else if (value.length < 10) {
          newErrors[name] = "La descripción debe tener 10 caracteres";
        } else {
          delete newErrors[name];
        }
        break;
      case "category":
        if (!value) {
          newErrors[name] = "Debe seleccionar una categoría";
        } else if (value === "Seleccione una categoría") {
          newErrors[name] = "Debe seleccionar una categoría";
        } else {
          delete newErrors[name];
        }
      default:
        break;
    }
  });
  return newErrors;
};

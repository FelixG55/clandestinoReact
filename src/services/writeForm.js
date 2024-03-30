import axios from "axios";

export const writeForm = async (values,errors,ENDPOINT) => {
    
  let dataToSend;
  let headers;

  if (values.image) {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      if (key === 'image') {
        formData.append('image', values[key][0]);  // Asumiendo que 'image' es un FileList
      } else {
        formData.append(key, values[key]);
      }
    });
    formData.append('errors', Object.keys(errors).length);
    dataToSend = formData;
    headers = {
      "Content-Type": "multipart/form-data",
    };
  } else {
    dataToSend = {
      ...values,
      errors: Object.keys(errors).length,
    };
    headers = {
      "Content-Type": "application/json",
    };
  }
  try {
   const response = await axios.post(ENDPOINT, dataToSend, {
    headers: headers,
  });
    return response.data; // Las credenciales son válidas
  } catch (error) {
    console.log('Credenciales incorrectas');
  }
}

import React, { useEffect ,useState } from 'react'


const Loading = (Element) => {
return () => {

  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(true);
        console.log(isLoading);
      }, 1000);
      
    },[]);

  if (!isLoading) {
    return (
      <div className='bg-dark '>
          <div class="spinner-border text-warning" role="status">
              <span class="visually-hidden">Cargando...</span>
          </div>
      </div>
    )
  }
  return <Element />;
}

}

export default Loading
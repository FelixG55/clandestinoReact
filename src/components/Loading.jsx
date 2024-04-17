import React from 'react'

function Loading() {
  return (
    <div className='bg-dark '>
        <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Cargando...</span>
        </div>
    </div>
  )
}

export default Loading
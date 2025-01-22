import React from 'react'

const PageTitle = ({children = "Titulo de la pagina"}) => {
  return (
    <h2 className="mb-8 text-4xl font-bold text-primary"> {children} </h2>
  )
}

export default PageTitle
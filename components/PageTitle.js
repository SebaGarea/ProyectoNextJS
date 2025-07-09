
const PageTitle = ({children = "Titulo de la pagina"}) => {
  return (
    <h2 className="mb-8 text-4xl font-bold text-black"> {children} </h2>
  )
}

export default PageTitle
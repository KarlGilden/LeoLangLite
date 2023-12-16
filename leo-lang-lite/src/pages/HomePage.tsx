import useRouter from "../hooks/useRouter"

const HomePage = () => {

  const router = useRouter();

  return (
    <div className="page-centered">
      <div className="container text-centered">
        <h1 className="large-heading">Learn a language with reading!</h1>
        <button onClick={()=>{router.navigate("/import")}} className="btn btn-medium">
          Get Reading!
        </button>
      </div>
    </div>
  )
}

export default HomePage
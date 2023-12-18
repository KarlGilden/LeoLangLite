import useRouter from "../hooks/useRouter"
import './css/HomePage.css'

const HomePage = () => {

  const router = useRouter();

  return (
    <div className="page-centered homepage page">
      <div className="container text-centered">
        <h1 className="large-heading">Learn Any Language With LeoLang</h1>
        <p className="spacer-medium"></p>
        <button onClick={()=>{router.navigate("/import")}} className="btn btn-medium">
          Get Reading!
        </button>
      </div>
    </div>
  )
}

export default HomePage
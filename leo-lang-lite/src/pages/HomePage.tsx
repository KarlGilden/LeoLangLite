import useRouter from "../hooks/useRouter"

const HomePage = () => {

  const router = useRouter();

  return (
    <div className="flex justify-center items-center bg-blue-100 h-screen">
      <div className="max-w-[800px] flex flex-col items-center">
        <h1 className="text-5xl text-blue-500">Learn Any Language With LeoLang</h1>
        <p className="p-3"></p>
        <button 
          onClick={()=>{router.navigate("/import")}} 
          className="text-xl bg-blue-900 text-white py-3 px-6 rounded-[3px]"
          >
          Get Reading!
        </button>
      </div>
    </div>
  )
}

export default HomePage
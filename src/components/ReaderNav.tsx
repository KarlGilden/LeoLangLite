import { FaArrowLeft } from "react-icons/fa"
import useRouter from "../hooks/useRouter";

const ReaderNav = () => {
    const router = useRouter();

  return (
    <div className="flex w-full max-w-[600px] py-4">
        <button onClick={()=>router.navigate("/import")}><FaArrowLeft className={"mr-2 text-xl"}/></button>
    </div>
  )
}

export default ReaderNav
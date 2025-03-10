import { FaArrowLeft } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io";
import useRouter from "../hooks/useRouter";

const ReaderNav = () => {
    const router = useRouter();

  return (
    <div className="flex justify-between w-full py-5 md:px-12 px-5">
        <button onClick={()=>router.navigate("/import")}><FaArrowLeft className={"mr-2 text-3xl"}/></button>
        <button className="py-1 text-sm flex items-center font-semibold " onClick={()=>{}}><IoMdSettings className={"mr-2 text-3xl"}/></button>
    </div>
  )
}

export default ReaderNav
import { FaArrowLeft } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io";
import useRouter from "../hooks/useRouter";

const ReaderNav = () => {
    const router = useRouter();

  return (
    <div className="flex justify-between w-full max-w-[600px] py-4">
        <button onClick={()=>router.navigate("/import")}><FaArrowLeft className={"mr-2 text-xl"}/></button>
        <button className="py-1 text-sm flex items-center font-semibold " onClick={()=>{}}><IoMdSettings className={"mr-2 text-xl"}/></button>
    </div>
  )
}

export default ReaderNav
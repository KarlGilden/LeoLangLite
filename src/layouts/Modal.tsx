import { useEffect } from "react";
import { FaTimes } from "react-icons/fa"

interface IProps {
    isOpen: boolean,
    close: ()=>void
    children: any
}

const Modal = ({isOpen, close, children}:IProps) => {

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        }, [isOpen]);

  return (
    <div className={`${isOpen ? "block" : "hidden"} p-2 flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-black-blur z-10`}>
        <div className="bg-white w-full h-full max-w-[600px] p-5 rounded-[5px] overflow-y-scroll">
            <div className="dialog-header flex justify-end">
                <button onClick={close} className="text-2xl"><FaTimes className="text-3xl" /></button>
            </div>
            {children}
        </div>
    </div>

  )
}

export default Modal
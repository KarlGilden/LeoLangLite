import { DictionaryEntry } from "../types/TranslationTypes";
import { FaTimes, FaUpload } from "react-icons/fa";
import { exportFile } from "../util/FileExport";

interface IProps {
    open: boolean
    setOpen: (open:boolean)=>void
    phraseList: DictionaryEntry[]
}

const PhraseListDialog = ({open, setOpen, phraseList}:IProps) => {
  return (
    <div className={`${open ? "block":"hidden"} p-5 flex justify-center items-center h-content fixed top-0 bottom-0 right-0 left-0 bg-black-blur z-10`}>
        <div className="bg-white h-full p-5 overflow-y-scroll rounded-[5px] sm:w-[50%] w-[90%]">
            <div className="dialog-header flex items-center justify-between">
                <button onClick={()=>{setOpen(false)}} className="text-2xl"><FaTimes className="text-3xl" /></button>
                <p className="p-2"></p>
                <button onClick={()=>{exportFile(phraseList)}} className="py-1 rounded-full flex items-center">Export to Anki <FaUpload className="ml-2" /></button>
            </div>
            <p className="p-2"></p>
            <div className="dialog-content">
                <table className="w-full">
                    <thead>
                        <tr>
                            <td className="text-left p-2 border-[1px] font-bold">Original</td>
                            <td className="text-left p-2 border-[1px] font-bold">Translation</td>
                        </tr>
                    </thead>
                    <tbody>
                        {phraseList?.map((value, index)=>{
                        return (
                            <tr key={"r"+index}>
                                <td key={"o"+index} className="p-2 border-[1px]">{value.original}</td>
                                <td key={"t"+index} className="p-2 border-[1px]">{value.translations[0]}</td>
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default PhraseListDialog
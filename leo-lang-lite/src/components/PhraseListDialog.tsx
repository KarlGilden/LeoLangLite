import { DictionaryEntry } from "../types/TranslationTypes";
import { MdClose } from "react-icons/md";
import { exportFile } from "../util/FileExport";

interface IProps {
    open: boolean
    setOpen: (open:boolean)=>void
    phraseList: DictionaryEntry[]
}

const PhraseListDialog = ({open, setOpen, phraseList}:IProps) => {
  return (
    <div className={`${open ? "block":"hidden"} flex justify-center items-center h-content fixed top-0 bottom-0 right-0 left-0 bg-black-blur`}>
        <div className="bg-[#fff] rounded-[5px] sm:w-[50%] w-[90%]">
            <div className="dialog-header p-5 flex items-center">
                <button onClick={()=>{setOpen(false)}} className="p-2 text-2xl"><MdClose /></button>
                <p className="p-2"></p>
                <button onClick={()=>{exportFile(phraseList)}} className="px-4 py-1 bg-[#000] text-[#fff] rounded-full">Export to Anki</button>
            </div>
            <div className="dialog-content p-5">
                <table className="w-full">
                    <thead>
                        <tr>
                            <td className="text-left p-2 border-[1px]">Original</td>
                            <td className="text-left p-2 border-[1px]">Translation</td>
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
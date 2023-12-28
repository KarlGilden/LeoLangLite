import { Translation } from "../types/GoogleTranslateAPI";
import { MdClose } from "react-icons/md";

interface IProps {
    open: boolean
    setOpen: (open:boolean)=>void
    phraseList: Translation[]
    exportFile: ()=>void
}

const PhraseListDialog = ({open, setOpen, phraseList, exportFile}:IProps) => {
  return (
    <div className={`${open ? "block":"hidden"} flex justify-center items-center h-content fixed top-0 bottom-0 right-0 left-0 bg-black-blur`}>
        <div className="bg-[#fff] rounded-[5px] w-[50%]">
            <div className="dialog-header p-5 flex items-center">
                <button onClick={()=>{setOpen(false)}} className="p-2 text-2xl"><MdClose /></button>
                <p className="p-2"></p>
                <button onClick={()=>{exportFile()}} className="px-4 py-1 bg-[#000] text-[#fff] rounded-full">Export to Anki</button>
            </div>
            <div className="dialog-content p-5">
                <table>
                    <tr className="">
                        <th className="text-left p-2 border-[1px]">Original</th>
                        <th className="text-left p-2 border-[1px]">Translation</th>
                    </tr>

                    {phraseList?.map((value, index)=>{
                    return (
                        <tr key={"r"+index}>
                            <td key={"o"+index} className="p-2 border-[1px]">{value.original}</td>
                            <td key={"t"+index} className="p-2 border-[1px]">{value.translation}</td>
                        </tr>
                    )
                })}
                </table>
            </div>
        </div>
    </div>
  )
}

export default PhraseListDialog
import { DictionaryEntry } from "../types/TranslationTypes";
import { FaUpload } from "react-icons/fa";
import { exportFile } from "../util/FileExport";

interface IProps {
    phraseList: DictionaryEntry[]
}

const PhraseListDialog = ({phraseList}:IProps) => {
  return (
    <div className="bg-white w-full flex flex-col justify-between">
        <div className="dialog-header flex-grow-1">
            <button onClick={()=>{exportFile(phraseList)}} className="py-1 rounded-full flex items-center">Export to Anki <FaUpload className="ml-2" /></button>
        </div>
        <div className="dialog-content w-full">
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
  )
}

export default PhraseListDialog
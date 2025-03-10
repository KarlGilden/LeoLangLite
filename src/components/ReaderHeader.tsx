import { useState } from 'react'
import { DictionaryEntry } from '../types/TranslationTypes';
import PhraseList from './PhraseList';
import { FaList } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import Modal from '../layouts/Modal';
import TranslationText from './TranslationText';

interface IProps {
    phraseList: DictionaryEntry[],
    translation: string
}

const ReaderHeader = ({phraseList, translation}:IProps) => {
    const [phraseListOpen, setPhraseListOpen] = useState(false);
    const [translationOpen, setTranslationOpen] = useState(false);

    const showPhraseList = () => {
        if(phraseList.length > 0){
            setPhraseListOpen(true);
        }
    }

  return (
    <div className="flex w-full top-0 bg-white z-5 py-5 md:px-12 px-5">
        <button className="py-1 text-sm flex items-center font-semibold " onClick={()=>{showPhraseList()}}><FaList className={"mr-2 text-xl"}/> Saved <span className="ml-2">{phraseList.length}</span></button>
        <p className='p-3'></p>
        <button className="py-1 text-sm flex items-center font-semibold " onClick={()=>{setTranslationOpen(true)}}><IoLanguage className={"mr-1 text-xl"}/>Translate</button>
        
        <Modal isOpen={phraseListOpen} close={()=>{setPhraseListOpen(false)}}>
            <PhraseList phraseList={phraseList}/>
        </Modal>

        <Modal isOpen={translationOpen} close={()=>{setTranslationOpen(false)}}>
            <TranslationText translation={translation}/>
        </Modal>
    </div>
  )
}

export default ReaderHeader
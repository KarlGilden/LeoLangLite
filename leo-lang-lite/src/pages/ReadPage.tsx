import { useState } from "react";
import useRouter from "../hooks/useRouter";
import Reader from "../components/Reader";
import Dictionary from "../components/Dictionary";
import { DictionaryEntry } from "../types/TranslationTypes";
import { translate } from "../util/Translation";
import ReaderHeader from "../components/ReaderHeader";

const ReadPage = () => {
    console.log('page render')
    const router = useRouter();

    const [phraseList, setPhraseList] = useState<DictionaryEntry[]>([]);
    const [currentPhrase, setCurrentPhrase] = useState<DictionaryEntry>({original:"", translations:[""]});
    const [currentTranslations, setCurrentTranslations] = useState<DictionaryEntry>({original:"", translations:[""]});

    const getText = () => {
        if(!localStorage.getItem("text")){
            return router.navigate('/import');
        }
        return JSON.parse(localStorage.getItem("text") || "[['No Content']]");
    };

    const define = async (phrase:string) => {
        setCurrentTranslations({original: phrase, translations:[""]});
        setCurrentPhrase({original: phrase, translations:[""]});

        await translate(phrase, phraseList).then((translation)=>{
            if(!translation) return;
            setCurrentTranslations(translation);
            setCurrentPhrase({original:phrase, translations:[translation.translations[0]]});
        })
    }

  return (
    <div className="px-5 pt-16 pb-28 flex flex-col items-center">
        <ReaderHeader phraseList={phraseList} />
        <div className="flex justify-center">
            <Reader text={getText()} define={define}/>
            <Dictionary 
                currentPhrase={currentPhrase}
                phraseList={phraseList}
                currentTranslations={currentTranslations}
                setCurrentPhrase={setCurrentPhrase} 
                setPhraseList={setPhraseList}
            />
        </div>
    </div>
  )
}

export default ReadPage
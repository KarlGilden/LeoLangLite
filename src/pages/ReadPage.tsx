import { useEffect, useState } from "react";
import useRouter from "../hooks/useRouter";
import Reader from "../components/Reader";
import Dictionary from "../components/Dictionary";
import { DictionaryEntry } from "../types/TranslationTypes";
import { translate } from "../util/Translation";
import {fetchText, fetchTranslation} from '../data/services/lessonService';
import ReaderNav from "../components/ReaderNav";
import ReaderHeader from "../components/ReaderHeader";

const ReadPage = () => {
    const router = useRouter();

    const [text, setText] = useState([[""]]);
    const [translation, setTranslation] = useState("");
    const [phraseList, setPhraseList] = useState<DictionaryEntry[]>([]);
    const [currentPhrase, setCurrentPhrase] = useState<DictionaryEntry>({original:"", translations:[""]});
    const [currentTranslations, setCurrentTranslations] = useState<DictionaryEntry>({original:"", translations:[""]});
    const [dictionaryIsDocked, setDictionaryIsDocked] = useState(true);
    
    useEffect(()=>{
        window.addEventListener("resize", handleResize)
        handleResize()
        getAndSetText();
        getAndSetTranslation();
        console.log("stateChange")
    },[]);

    const getAndSetText = async () => {
        await fetchText().then((text)=>{
            setText(text);
        }).catch(()=>{
            router.navigate('/import');
        });
    };

    const getAndSetTranslation = async () => {
        await fetchTranslation().then((translation)=>{
            setTranslation(translation);
        }).catch(()=>{
            router.navigate('/import');
        });
    };

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setDictionaryIsDocked(false)
        }
    }

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
    <div className="flex flex-col items-center max-h-screen bg-white">
        <ReaderNav />
        <ReaderHeader translation={translation} phraseList={phraseList}/>
        <div className={` flex justify-center w-full overflow-y-scroll bg-white pb-5 z-1 px-5`}>
            <Reader text={text} define={define}/>
            <Dictionary 
                isDocked={dictionaryIsDocked}
                setIsDocked={setDictionaryIsDocked}
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
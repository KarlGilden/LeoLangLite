import { useState } from "react";
import useRouter from "../hooks/useRouter";
import Reader from "../components/Reader";
import Dictionary from "../components/Dictionary";
import { TranslationResult } from "../types/GoogleTranslateAPI";

const ReadPage = () => {

    const router = useRouter();

    const [showDictionary, setShowDictionary] = useState(false);
    const [currentPhrase, setCurrentPhrase] = useState<TranslationResult>({
        data: {
            translations: [{
                translatedText: ""
            }]
        }
    });

    const [loadingTranslation, setLoadingTranslation] = useState(false);

    let text:string | string[][] = [["No content"]];

    const loadText = () => {
        checkData();
        text = JSON.parse(localStorage.getItem("text") || "[['No Content']]");
    };

    const checkData = () => {
        if(!localStorage.getItem("text")){
            router.navigate('/import');
        }
    }

    loadText();

  return (
    <div className="page flex justify-center">
        <Reader text={text} setLoading={setLoadingTranslation} setPhrase={setCurrentPhrase} showDictionary={setShowDictionary}/>
        <Dictionary loading={loadingTranslation} phrase={currentPhrase} show={showDictionary}/>
    </div>
  )
}

export default ReadPage
import { useState } from "react";
import useRouter from "../hooks/useRouter";
import Reader from "../components/Reader";
import Dictionary from "../components/Dictionary";

const ReadPage = () => {

    const router = useRouter();

    const [showDictionary, setShowDictionary] = useState(false);
    const [currentPhrase, setCurrentPhrase] = useState("");

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
    <div className="page-centered">
        <Reader text={text} setPhrase={setCurrentPhrase} showDictionary={setShowDictionary}/>
        <Dictionary phrase={currentPhrase} show={showDictionary}/>
    </div>
  )
}

export default ReadPage
import { useState } from 'react'
import useRouter from '../hooks/useRouter';
import './css/ImportPage.css'
const ImportPage = () => {
    const router = useRouter();
    
    const [text, setText] = useState<string>("");
    const [error, setError] = useState<string>("");

    const submit = () => {
        if(textIsValid()){
            const formattedText = buildText();
            localStorage.setItem("text", formattedText);
            router.navigate("/read");
        }
    };

    const textIsValid = () => {
        if(text === ""){
            setError("Please enter all fields");
            return false;
        }
        return true;
    };

    const buildText = () => {
        const paragraphs = text.split("\n\n");
        const formattedText = [];

        for(let i=0;i<paragraphs.length;i++){
            formattedText.push(paragraphs[i].split(" ")); 
        }

        return JSON.stringify(formattedText);
    };

  return (
    <div className="container">
        <h1>Import</h1>
        <div>
            <textarea
                onChange={(e)=>setText(e.target.value)}
            ></textarea>
        </div>
        <button onClick={()=>submit()}>Read!</button>
        <p>{error}</p>
    </div>
  )
}

export default ImportPage
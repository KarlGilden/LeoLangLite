import { useState } from 'react'
import useRouter from '../hooks/useRouter';

const ImportPage = () => {
    const router = useRouter();
    
    const [text, setText] = useState<string>("");
    const [error, setError] = useState<string>("");

    const submit = () => {
        if(textIsValid()){
            localStorage.setItem("text", text);
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

  return (
    <div>
        <h1>Import</h1>
        <div>
            <textarea name="" id=""
                onChange={(e)=>setText(e.target.value)}
            ></textarea>
        </div>
        <button onClick={()=>submit()}>Read!</button>
        <p>{error}</p>
    </div>
  )
}

export default ImportPage
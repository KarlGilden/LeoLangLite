import { useState } from 'react'
import useRouter from '../hooks/useRouter';

const ImportPage = () => {
    const router = useRouter();
    
    const [text, setText] = useState<string>("");

    const submit = () => {
        localStorage.setItem("text", text);
        router.navigate("/read");
    }

  return (
    <div>
        <h1>Import</h1>
        <div>
            <textarea name="" id=""
                onChange={(e)=>setText(e.target.value)}
            ></textarea>
        </div>
        <button onClick={()=>submit()}>Read!</button>
    </div>
  )
}

export default ImportPage
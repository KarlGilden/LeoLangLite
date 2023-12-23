import { useState } from 'react';
import useRouter from '../hooks/useRouter';
import './css/ImportPage.css';
import sampleStories from '../data/samples.json'

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

    const selectSampleStory = (index:number) => {
        setText(sampleStories[index].text);
    }

    console.log(sampleStories)

  return (
    <div className="page flex justify-center">
        <div className='container'>
            <h1>Choose a premade story</h1>
            <p className='spacer-medium'></p>
            <div className='stories-container'>
                <div onClick={()=>{selectSampleStory(0)}} id='story-1' className='story-card'>
                    <img className='card-image' src={sampleStories[0].image} alt="" />
                </div>
                <div onClick={()=>{selectSampleStory(1)}} id='story-2' className='story-card'>
                    <img className='card-image' src={sampleStories[1].image} alt="" />
                </div>
                <div onClick={()=>{selectSampleStory(2)}} id='story-3' className='story-card'>
                    <img className='card-image' src={sampleStories[2].image} alt="" />
                </div>
            </div>
            <p className='spacer-small'></p>
            <h1>Or</h1>
            <i>Import your own text</i>
            <p className='spacer-small'></p>
            <textarea
                className='input'
                value={text}
                onChange={(e)=>setText(e.target.value)}
            ></textarea>
            <p className='spacer-small'></p>
            <button className='btn btn-medium btn-full' onClick={()=>submit()}>
                Read!
            </button>
            <p>{error}</p>
        </div>
    </div>
  )
}

export default ImportPage
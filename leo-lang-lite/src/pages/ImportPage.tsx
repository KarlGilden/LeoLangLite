import { useState } from 'react';
import useRouter from '../hooks/useRouter';
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
    <div className="flex justify-center w-full h-screen p-24 bg-blue-100">
        <div className='p-10 w-full flex flex-col items-center max-w-[600px]'>
            <h1 className='text-3xl'>Choose a premade story</h1>
            <p className='p-5'></p>
            <div className='flex justify-between w-full'>
                <div onClick={()=>{selectSampleStory(0)}} id='story-1' className='shadow-container cursor-pointer hover:scale-110 transition ease-in-out duration-300'>
                    <img className='w-32 h-32 rounded-[5px]' src={sampleStories[0].image} alt="" />
                </div>
                <div onClick={()=>{selectSampleStory(1)}} id='story-2' className='shadow-container'>
                    <img className='w-32 h-32 rounded-[5px]' src={sampleStories[1].image} alt="" />
                </div>
                <div onClick={()=>{selectSampleStory(2)}} id='story-3' className='shadow-container'>
                    <img className='w-32 h-32 rounded-[5px]' src={sampleStories[2].image} alt="" />
                </div>
            </div>
            <p className='p-5'></p>
            <h1 className='text-3xl'>Or</h1>
            <i>Import your own text</i>
            <p className='p-5'></p>
            <textarea
                className='w-full h-48 p-2 rounded-[5px] focus:outline-none shadow-container'
                value={text}
                onChange={(e)=>setText(e.target.value)}
            ></textarea>
            <p className='p-2'></p>
            <button className='py-2 px-4 text-xl bg-blue-900 text-white rounded-[5px]' onClick={()=>submit()}>
                Read!
            </button>
            <p>{error}</p>
        </div>
    </div>
  )
}

export default ImportPage
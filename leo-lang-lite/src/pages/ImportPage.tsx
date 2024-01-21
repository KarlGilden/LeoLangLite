import { useState } from 'react';
import useRouter from '../hooks/useRouter';
import sampleStories from '../data/samples.json'
import { updateText } from '../data/services/lessonService';

const ImportPage = () => {
    const router = useRouter();
    
    const [text, setText] = useState<string>("");
    const [error, setError] = useState<string>("");
    

    const submit = async () => {
        await updateText(text).then(()=>{
            router.navigate("/read");
        }).catch(()=>{
            setError("Please enter all fields")
        })
    };

    const selectSampleStory = (index:number) => {
        setText(sampleStories[index].text);
    }

  return (
    <div className="flex justify-center w-full min-h-screen px-5 py-16 bg-blue-100">
        <div className='max-w-[600px] p-5 w-full flex flex-col items-center max-w-[600px]'>

            <h1 className='text-3xl'>Choose a premade story</h1>

            <p className='p-5'></p>

            <div className='flex justify-between w-full'>
                <StoryCard action={selectSampleStory} index={0}/>
                <StoryCard action={selectSampleStory} index={1}/>
                <StoryCard action={selectSampleStory} index={2}/>
            </div>

            <p className='p-5'></p>

            <h1 className='text-3xl'>Or</h1>
            <i>Import your own text</i>

            <p className='p-5'></p>

            <textarea
                title='hello'
                placeholder='Write your text here...'
                className='w-full h-48 p-2 rounded-[5px] focus:outline-none shadow-container'
                value={text}
                onChange={(e)=>setText(e.target.value)}
            ></textarea>

            <p className='p-2'></p>
            <button className='py-2 px-4 text-xl bg-black text-white rounded-[5px]' onClick={()=>submit()}>
                Read!
            </button>
            <p>{error}</p>
        </div>
    </div>
  )
}

export default ImportPage


interface IProps {
    action: (i:number)=>void
    index: number
}

const StoryCard = ({action, index}:IProps) => {
    return(
        <div onClick={()=>{action(index)}} className='shadow-container cursor-pointer hover:scale-110 transition ease-in-out duration-300 '>
            <img className='sm:w-32 sm:h-32 rounded-[5px] w-20 h-20' src={sampleStories[index].image} alt="" />
        </div>
    );
};
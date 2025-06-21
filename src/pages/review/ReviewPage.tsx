import { useEffect, useState } from 'react';
import { useUserInfo } from '../../hooks/useUserInfo';
import Navbar from '../../components/navbar/Navbar';
import DataTable from '../../components/layout/DataTable';

const ReviewPage = () => {
    const { getUserDictionary } = useUserInfo();
    
    const [reviewTableHeaders, setReviewTableHeaders] = useState<string[]>([]);
    const [reviewTableData, setReviewTableData] = useState<any[]>([]);

    useEffect(()=>{
        retrieveUserWords();
    }, []);

    const retrieveUserWords = async () =>{
        const userDict = await getUserDictionary();
        const {reviewHeaders, reviewData} = createReviewTableData(userDict);
        setReviewTableHeaders(reviewHeaders);
        setReviewTableData(reviewData);
    }

    const createReviewTableData = (data: DictionaryEntry[]) => {

        const reviewHeaders = ["Word/Phrase", "Meaning", "Level"];

        const reviewData = data.map((value:DictionaryEntry)=>{
            return [
                {[reviewHeaders[0]]: value.word.word_text},
                {[reviewHeaders[1]]: value.definitions[0].definition_text},
                {[reviewHeaders[2]]: value.word.level}
                ]
            }
        );

        return {reviewHeaders, reviewData};
    }   

  return (
        <div>
            <Navbar />
            <div className='flex h-screen pt-[50px]'>
                <div className='p-10 w-full'>
                    <DataTable headers={reviewTableHeaders} data={reviewTableData}/>
                </div>
            </div>
        </div>
  )
}

export default ReviewPage
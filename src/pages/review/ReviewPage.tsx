import { useEffect, useState } from 'react';
import Page from '../layout/Page'
import { useUserInfo } from '../../hooks/useUserInfo';
import Navbar from '../../components/navbar/Navbar';
import DataTable from '../../components/layout/DataTable';

const ReviewPage = () => {
    const { getUserDictionary } = useUserInfo();
    
    // const [userDictionary, setUserDictionary] = useState<DictionaryEntry[] | null>(null);
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
    <Page requiresAuth={true} noAuthAllowed={false}>
        <div>
            <Navbar />
            <div className='flex h-screen pt-[50px]'>
                <div className='p-10 w-full'>
                    {/* <table className='w-full rounded-lg overflow-hidden'>
                        <tr className='bg-highlight text-left'>
                            <th className='p-2 font-bold'>Word/phrase</th>
                            <th className='p-2 font-bold'>Meaning</th>
                            <th className='p-2 font-bold'>Level</th>
                        </tr>
                        {userDictionary?.map((entry)=>{
                            return(
                                <tr className='odd:bg-wash'>
                                    <td className='p-2'>{entry.word.word_text}</td>
                                    <td className='p-2'>{entry.definitions[0].definition_text}</td>
                                    <td className='p-2'>{entry.word.level}</td>
                                </tr>
                            )
                        })}
                    </table> */}
                    <DataTable headers={reviewTableHeaders} data={reviewTableData}/>
                </div>
            </div>
        </div>
    </Page>
  )
}

export default ReviewPage
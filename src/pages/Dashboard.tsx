import Page from './layout/Page'
import { useAuth } from '../hooks/AuthProvider'
import { useEffect, useState } from 'react';
import { UserIdentity } from '@supabase/supabase-js';
import { useUserInfo } from '../hooks/useUserInfo';
import Spacer from '../components/layout/Spacer';
import Navbar from '../components/layout/Navbar';

function Dashboard() {
    const {getUser} = useAuth();
    const { getUserDictionary, getKnownWordsCount, getLearningWordsCount } = useUserInfo();

    const [userData, setUserData] = useState<UserIdentity | null>(null);
    const [knownWordCount, setKnownWordCount] = useState<number>(0);
    const [learningWordCount, setLearningWordCount] = useState<number>(0);

    useEffect(()=>{
      retrieveUserData();
      retrieveUserWords();
    }, []);

    const retrieveUserData = async () =>{
      const user = await getUser();

      if(!user?.identities) return;

      setUserData(user.identities[0])
    }


    const retrieveUserWords = async () =>{
      const learningWords = await getLearningWordsCount();
      const knownWords = await getKnownWordsCount();
      setLearningWordCount(learningWords.count)
      setKnownWordCount(knownWords.count)
      const userDict = await getUserDictionary();
      console.log(userDict)
    }

  return (
    <Page requiresAuth={true} noAuthAllowed={false}>
      <div>
        <Navbar />
        <div className='flex h-screen pt-[50px]'>
            <div className='w-full h-full p-5'>
              <h1 className='text-2xl'>Welcome,</h1>
              <h2 className='text-4xl'>{userData?.identity_data?.full_name}</h2>                <Spacer size={2} />
              <Spacer size={1} />
              <div className='flex items-center'>
                <div>
                  <p>Known words: {knownWordCount}</p>
                  <p>Learning words: {learningWordCount}</p>
                </div>
                <Spacer size={2} />
                <button className='bg-highlight py-2 px-5 rounded-3xl'>Review</button>
              </div>
            </div>
        </div>
      </div>

    </Page>
  )
}

export default Dashboard
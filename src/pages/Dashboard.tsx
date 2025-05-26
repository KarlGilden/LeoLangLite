import Page from './layout/Page'
import { useAuth } from '../hooks/AuthProvider'
import { useEffect, useState } from 'react';
import { UserIdentity } from '@supabase/supabase-js';

function Dashboard() {
    const {getUser} = useAuth();

    const [userData, setUserData] = useState<UserIdentity | null>(null);

    useEffect(()=>{
      retrieveUserData();
    }, []);

    const retrieveUserData = async () =>{
      const user = await getUser();
      if(!user) return;
      if(!user.identities) return;
      setUserData(user.identities[0])
    }

  return (
    <Page requiresAuth={true} noAuthAllowed={false}>
      <div>
        <nav className='absolute top-0 left-0 h-[50px] px-5 flex bg-primary text-white w-full'>
          <div className='h-full flex items-center'>
            <a className='h-full flex items-center hover:bg-primaryDark px-2' href="">Dashboard</a>
            <a className='h-full flex items-center hover:bg-primaryDark px-2' href="">Review</a>
          </div>
          <div>

          </div>
        </nav>
        <div className='flex justify-center items-center h-screen pt-[50px]'>
            {userData?.identity_data?.full_name}
        </div>
      </div>

    </Page>
  )
}

export default Dashboard
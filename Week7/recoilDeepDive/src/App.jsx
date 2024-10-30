import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '/App.css'
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil';
import { jbAtom, msgAtom, ntfAtom, nwAtom, tncount } from './Atoms';
import { Queries } from './AsyncQ';
import {AtomsFamily} from './AtmosFamily';
import { SelectFamily } from './SelectorFamily';
import TotalAvatars from './Avatars'

function App() {
  return (
    <>
      {/* <RecoilRoot>
        <AtomsFamily></AtomsFamily>
      </RecoilRoot> */}
      {/* <RecoilRoot>
        <SelectFamily></SelectFamily>
      </RecoilRoot> */}
      <TotalAvatars></TotalAvatars>
    </>
  )
}

{/* <RecoilRoot>
        <Bar></Bar>
      </RecoilRoot> */}
      {/* <RecoilRoot> 
      <Queries></Queries>
      </RecoilRoot> */}

function Bar() {
  const networkcount = useRecoilValue(nwAtom);
  const notifcount = useRecoilValue(ntfAtom);
  const jobcount = useRecoilValue(jbAtom);
  const [msgcount, setmsgcount] = useRecoilState(msgAtom)
  const tn= useRecoilValue(tncount);
  return <div>
    <button>Home</button>
    <button>My Network <sup>({networkcount >= 100 ? "99+" : networkcount})</sup></button>
    <button>Notifications<sup>({notifcount > 99 ? "99+" : notifcount})</sup></button>
    <button>Jobs <sup>({jobcount > 99 ? "99+" : jobcount})</sup></button>
    <button>Messages<sup>({msgcount > 99 ? "99+" : msgcount})</sup></button>
    <button onClick={()=>{
        setmsgcount(msgcount+1)
    }}>Me <sup>({tn})</sup></button>
  </div>
}

export default App

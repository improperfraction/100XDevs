import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'

import { ntfs, ntfscount } from "./Atoms";



export function Queries()
{
    //const [ ntf, setNtf]= useRecoilState(ntfs);
    const ntf= useRecoilValue(ntfs);
    const ntfscountt= useRecoilValue(ntfscount)

    // useEffect(()=>{
    //     fetch("http://localhost:3000/notif").
    //     then(async (res)=>{
    //         const jsonres= await res.json();
    //         setNtf(jsonres.data);

    //     })
    // }, [])

    return (
        <>
        <QueryBar ntf={ntf} ntfsc={ntfscountt}></QueryBar>
        </>
    )
}

function QueryBar({ntf, ntfsc}) {
    console.log(ntf.jobs);
    return <div>
      <button>Home</button>
      <button>My Network <sup>({ntf.network >= 100 ? "99+" : ntf.network})</sup></button>
      <button>Notifications<sup>({ntf.jobs > 99 ? "99+" : ntf.jobs})</sup></button>
      <button>Jobs <sup>({ntf.notification > 99 ? "99+" : ntf.notification})</sup></button>
      <button>Messages<sup>({ntf.message > 99 ? "99+" : ntf.message})</sup></button>
      <button>Me <sup>({ntfsc})</sup> </button>
    </div>
  }


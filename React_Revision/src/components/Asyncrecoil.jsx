import axios from "axios";
import { atom, RecoilRoot, selector, useRecoilValue } from "recoil";



const user = selector({
    key: 'user',
    get: async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(res.data);
        return res.data;
    }
})


export default function Asyncrecoil() {

    return (
        <>
            <RecoilRoot>
                <Userdetails></Userdetails>
            </RecoilRoot>
        </>
    )
}

function Userdetails() {
    const users = useRecoilValue(user);
    return (
        <div>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
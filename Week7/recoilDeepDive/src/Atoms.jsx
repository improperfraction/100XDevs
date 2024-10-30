
import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { TODOS } from "./AtmosFamily";

export const nwAtom = atom({
    key: "nwAtom",
    default: 102
})

export const jbAtom = atom({
    key: "jbAtom",
    default: 0
})

export const ntfAtom = atom({
    key: "ntfAtom",
    default: 12
})
export const msgAtom = atom({
    key: "msgAtom",
    default: 0
})

export const tncount = selector({
    key: 'tncount',
    get: (props) => {
        const nw = props.get(nwAtom);
        const jb = props.get(jbAtom);
        const ntf = props.get(ntfAtom);
        const msg = props.get(msgAtom);

        return nw + jb + ntf + msg;
    }
})

export const ntfs = atom({
    key: "ntfs",
    default: selector({
        key: "ntfsselector",
        get: async () => {
            const res = await fetch("http://localhost:3000/notif");
            const jsonres = await res.json();
            return jsonres.data;
        }
    })
})


export const ntfscount = selector({
    key: 'ntfscount',
    get: (props) => {
        const nw = props.get(ntfs);
        return nw.network + nw.jobs + nw.notification + nw.message;
    }
})


export const todosid = atomFamily({
    key: "todosid", //unique key for this atom family
    default: async (id) => {// the default value is a function that takes the parameter
        const res = await fetch(`http://localhost:3000/todo/${id}`);
        const jsonres = await res.json();
        console.log(`http://localhost:3000/todo/${id}`)

        console.log(jsonres.item);
        return jsonres.item;
        // return TODOS.find(x => x.id === id)
    }
})


export const todosids = atomFamily({
    key: "todosids",
    default: selectorFamily({
        key: "todosidsSelector",
        get: (id) => async ({ get }) => {
            await new Promise(r=> setTimeout(r, 3000));
            const res = await fetch(`http://localhost:3000/todo/${id}`);
            const jsonres = await res.json();
            return jsonres.item;
        }
    })
})



//return TODOS.find(x=>x.id===id)
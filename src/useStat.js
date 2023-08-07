import { create } from "zustand";
import {subscribeWithSelector} from 'zustand/middleware'

 const  useStat = create(subscribeWithSelector((set)=> ({
    mode: "pieChart",
    setMode: (input) => set(() =>({mode: input})),
    data: [],
    addData: (data) => set((state) => ({
        data: data.push(data)
    })),
    removeData : (data) => set((state)=>({
        data: state.data.filter((dataElement) => data != dataElement )
    }))
})))

export default useStat
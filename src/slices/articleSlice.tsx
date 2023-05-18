import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from 'nanoid'

const initialState = [
    {code: 1,info:{titre:'t1',redacteur:'red1',journal:'j1',corps:'c1',theme:'t1'}},
    {code: 2,info:{titre:'t2',redacteur:'red2',journal:'j2',corps:'c2',theme:'t2'}},
]
const articleSlice = createSlice({
   name:'articles',
   initialState,
   reducers:{
    add_article:(state,action)=>{
        let newarticle:any = {code:nanoid(), info: {...action.payload}}
        state.push(newarticle)
        console.log("🚀 ~ file: articleSlice.tsx:14 ~ newarticle:", newarticle)
    },
    delete_article:(state,action)=>{
        state.splice(action.payload,1)
    },
    update_article:(state,action)=>{
        let updatedArticle:any = {code:nanoid(), info: {...action.payload.dataInput}}
        state.splice(action.payload.index,1)
        state.push(updatedArticle)
        console.log("🚀 ~ file: articleSlice.tsx:33 ~ updatedArticle:", updatedArticle)
        console.log('updated')
    }
   }
})
export const {add_article,delete_article,update_article} = articleSlice.actions
export default articleSlice.reducer
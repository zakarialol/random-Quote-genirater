//selectin elements 
const dataBtn = document.querySelector('[data-btn = getQuote]')
// importing files .js
import "./ui.js"
//importing functions
import { quoteFunc } from "./api.js";
import { uiFunc } from "./ui.js";
dataBtn.addEventListener('click',async()=>{
    const data = await quoteFunc()
    uiFunc(data)
})
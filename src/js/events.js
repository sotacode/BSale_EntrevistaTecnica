import { filtrar } from "./components/search";



buttonSearch.addEventListener('click', filtrar)
export const enterClick = (e)=>{
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        buttonSearch.click();
    }
}
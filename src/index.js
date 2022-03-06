import { init } from './js/components/card';
import { buttonSearch } from './js/components/search';
import './styles.css';

const enterClick = (e)=>{
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        buttonSearch.click();
    }
}

init();

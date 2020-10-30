import { lightTheme } from '../constants/Themes';
import { switch_theme } from './themeActions';

const initialState = {

    theme: lightTheme

}

const themeReducer = (state = initialState, action) => {

    switch (action.type) {
        case switch_theme: 
            return {theme: action.theme}
            break;
    
        default:
            return state;
    }

};

export default themeReducer;
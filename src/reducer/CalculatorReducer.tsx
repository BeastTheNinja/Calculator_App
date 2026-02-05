import type { CalculatorAction } from "../data/CalculatorAction";



export const CalculatorReducer = (state: string, action: CalculatorAction) => {

    switch (action.type) {
        case 'ADD_DIGIT': {
            return state + action.payload;
        }
        case 'ADD_+': {
            return state + '+';
        }
        case 'ADD_-': {
            return state + '-';
        }
        case 'ADD_*': {
            return state + '*';
        }
        case 'ADD_/': {
            return state + '/';
        }
        case 'ADD_=': {
            const result = eval(state);
            return String(result);
        }
        case 'CLEAR': {
            return '';
        }
        case 'DELETE': {
            return state.slice(0, -1);
        }
        default:
            return state;
    }
}
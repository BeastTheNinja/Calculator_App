import { type Dispatch } from "react";
import type { CalculatorAction } from "../../data/CalculatorAction";

interface CalculatorControlsProps {
    dispatch: Dispatch<CalculatorAction>;
}

export const CalculatorControls = ({ dispatch }: CalculatorControlsProps) => {
    const handleDigitClick = (digit: string) => {
        dispatch({ type: 'ADD_DIGIT', payload: digit });
    }

    const handleOperatorClick = (operator: string) => {
        switch (operator) {
            case '+':
                dispatch({ type: 'ADD_+' });
                break;
            case '-':
                dispatch({ type: 'ADD_-' });
                break;
            case '*':
                dispatch({ type: 'ADD_*' });
                break;
            case '/':
                dispatch({ type: 'ADD_/' });
                break;
            case '=':
                dispatch({ type: 'ADD_=' });
                break;
            case 'CLEAR':
                dispatch({ type: 'CLEAR' });
                break;
            case 'DELETE':
                dispatch({ type: 'DELETE' });
                break;
        }
    }

    const handleEquals = () => {
        dispatch({ type: 'ADD_=' });
    }

    return (
        <div className="grid grid-cols-4 gap-2">
            <button onClick={() => handleOperatorClick('CLEAR')} className="col-span-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded">
                CLEAR
            </button>
            <button onClick={() => handleOperatorClick('DELETE')} className="col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded">
                DELETE
            </button>

            <button onClick={() => handleDigitClick('7')} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded">
                7
            </button>
            <button onClick={() => handleDigitClick('8')} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded">
                8
            </button>
            <button onClick={() => handleDigitClick('9')} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded">
                9
            </button>
            <button onClick={() => handleOperatorClick('/')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded">
                /
            </button>

            <button onClick={() => handleDigitClick('4')} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded">
                4
            </button>
            <button onClick={() => handleDigitClick('5')} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded">
                5
            </button>
            <button onClick={() => handleDigitClick('6')} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded">
                6
            </button>
            <button onClick={() => handleOperatorClick('*')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded">
                *
            </button>

            <button onClick={() => handleDigitClick('1')} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded">
                1
            </button>
            <button onClick={() => handleDigitClick('2')} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded">
                2
            </button>
            <button onClick={() => handleDigitClick('3')} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded">
                3
            </button>
            <button onClick={() => handleOperatorClick('-')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded">
                -
            </button>

            <button onClick={() => handleDigitClick('0')} className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded">
                0
            </button>
            <button onClick={() => handleOperatorClick('+')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded">
                +
            </button>
            <button onClick={handleEquals} className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded">
                =
            </button>
        </div>
    )
}
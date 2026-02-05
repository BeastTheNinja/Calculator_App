import { useReducer } from "react";
import { CalculatorReducer } from "../../reducer/CalculatorReducer";
import { CalculatorControls } from "./CalculatorControls";

export const CalculatorContainer = () => {
    const [state, dispatch] = useReducer(CalculatorReducer, '');

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 rounded-lg shadow-2xl p-6 w-80">
                <div className="bg-black rounded-lg p-4 mb-6">
                    <div className="text-white text-right text-4xl font-mono overflow-hidden wrap-break-word">
                        {state || '0'}
                    </div>
                </div>
                <CalculatorControls dispatch={dispatch} />
            </div>
        </div>
    )
}
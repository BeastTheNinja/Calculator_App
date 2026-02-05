export type CalculatorAction =
    | { type: 'ADD_DIGIT'; payload: string; }
    | { type: 'ADD_+'; }
    | { type: 'ADD_-'; }
    | { type: 'ADD_*'; }
    | { type: 'ADD_/'; }
    | { type: 'ADD_='; payload?: string; }
    | { type: 'CLEAR'; }
    | { type: 'DELETE'; }

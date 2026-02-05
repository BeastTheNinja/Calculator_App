export type CalculatorInitValue = {
    currentValue: string;
    previousValue: string;
    operator: '+' | '-' | '*' | '/' | '=' | null;
}
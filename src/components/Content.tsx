import { CalculadoraIMC } from "./CalculadoraIMC";
import { CalculadoraTMB } from "./CalculadoraTMB";

export function Content() {
    return (
        <div className="w-[84%] min-h-screen bg-gray-900 p-4">
            <h1 className="text-2xl font-semibold text-green-300 uppercase mb-3">Dashboard</h1>
            <div className="flex justify-around mt-4">
                <div className="w-[30%] h-auto border bg-gray-500 border-gray-500 rounded-lg">
                    <CalculadoraIMC />
                </div>
                <div className="w-[30%] h-auto border bg-gray-500 border-gray-500 rounded-lg">
                    <CalculadoraTMB />
                </div>
            </div>
        </div>
    )
}
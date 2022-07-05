export function SelectForm({ children }) {
    return (
        <select
            className="p-2 rounded-lg w-full text-gray-800 font-base text-center">
            {children}
        </select>
    )
}
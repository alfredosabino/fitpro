export function Card({ children }: any) {

    return (
        <div className="w-full h-auto border bg-gray-600 border-gray-500 rounded-lg m-2">
            <div className="p-4">
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
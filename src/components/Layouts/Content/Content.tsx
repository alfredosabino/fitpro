import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

export function Content({ children }) {
    return (
        <div className='min-h-screen'>
            <Header />
            <main className='flex h-full max-h-full w-full'>
                <Sidebar />
                <div className="w-[84%] min-h-screen bg-gray-100 p-4">
                    {children}
                </div>
            </main>
        </div>

    )
}
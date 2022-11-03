import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

export function Content({ children }: any) {
    return (
        <div className='min-h-screen'>
            <Header />
            <main className='xl:flex lg:flex md:grid sm:grid min-h-screen w-full'>
                <Sidebar />
                <div className="w-full bg-gray-100 p-4">
                    {children}
                </div>
            </main>
        </div>

    )
}
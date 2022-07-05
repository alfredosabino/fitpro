import { Logo } from "../Logo";

export function Header() {
    return (
        <header className="w-full py-3 px-4 flex items-center bg-gray-700 border-b border-gray-500">
            <Logo />
            <span className="text-2xl text-semibold">Fitness Pro</span>
        </header>
    )
}
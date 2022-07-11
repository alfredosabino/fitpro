import { Link } from "react-router-dom";
import { Logo } from "../Logo";

export function Header() {
    return (
        <header className="w-full py-3 px-4  bg-gray-700 border-b border-gray-500">
            <div>
                <Link to="/">
                    <div className="flex items-center">
                        <span className="text-2xl text-semibold">Fitness Pro</span>
                    </div>
                </Link>
            </div>
        </header>
    )
}
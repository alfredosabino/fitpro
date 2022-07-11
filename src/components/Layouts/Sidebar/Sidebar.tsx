import { User } from "../../Users/User";
import { MenuItems } from "./MenuItems/MenuItems";

export function Sidebar() {
    return (
        <aside className="w-[16%] bg-gray-700 p-5 border-r border-gray-600 ">
            <User />
            <div className="flex flex-col bg-gray-500 rounded-lg mt-4">
                <MenuItems link={"/"} menuitem={"Dashboard"} />
                <MenuItems link={"/avaliable"} menuitem={"Avalicação"} />
                <MenuItems link={"/coaches"} menuitem={"Professores"} />
                <MenuItems link={"/studants"} menuitem={"Alunos"} />
            </div>
        </aside>
    )
}
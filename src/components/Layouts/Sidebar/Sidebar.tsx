import { useParams } from "react-router-dom";
import { User } from "../../Users/User";
import { MenuItems } from "./MenuItems/MenuItems";

export function Sidebar() {
    const {slug} =useParams<{slug: string}>()
    return (
        <aside className="w-[16%] bg-gray-700 p-5 border-r border-gray-600 ">
            <User slugUser={slug} />
            <div className="flex flex-col bg-gray-500 rounded-lg mt-4">
                <MenuItems link={"/coaches"} menuitem={"Professores"} />
                <MenuItems link={"/studants"} menuitem={"Alunos"} />
                <MenuItems link={"/avaliable"} menuitem={"Avalicação"} />
            </div>
        </aside>
    )
}
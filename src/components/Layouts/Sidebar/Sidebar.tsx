import { User } from "../../Users/User";
import { MenuItems } from "./MenuItems/MenuItems";

import { House, ChalkboardTeacher, Student, Note } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className="md:w-[100%] lg:w-[28%] bg-gray-700 p-5 border-r border-gray-600 ">
            <User />
            <div className="xl:grid xl:justify-start lg:grid lg:justify-start md:flex md:justify-center sm:flex sm:justify-center bg-gray-500 rounded-lg mt-4">
                <MenuItems link={"/"} menuitem={"Dashboard"} icon={<House size={18}/>} />
                <MenuItems link={"/avaliable"} menuitem={"Avalicação"} icon={<Note size={18}/>} />
                <MenuItems link={"/coaches"} menuitem={"Professores"} icon={<ChalkboardTeacher size={18}/>} />
                <MenuItems link={"/studants"} menuitem={"Alunos"} icon={<Student size={18}/>} />
            </div>
        </aside>
    )
}
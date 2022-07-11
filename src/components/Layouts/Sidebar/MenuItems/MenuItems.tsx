import { Link } from "react-router-dom";

export function MenuItems(props: any) {
    return (
        <Link
            to={props.link}
            className="items-center justify-start p-3 text-sm hover:text-base hover:text-green-300 hover:bg-gray-700">
            {props.menuitem}
        </Link>
    )
}
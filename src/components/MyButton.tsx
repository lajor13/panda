
import Point from "../assets/point.png";

type MyButtonProps = {
    leadingIcon: string;
    trailingIcon: string;
    text: string;
    onClick: () => void
}

const MyButton = ({ leadingIcon, trailingIcon, text, onClick }: MyButtonProps) => {


    return (
        <div className="cursor-pointer group relative my-[76px]"
            onClick={onClick}>
            <img className="absolute top-[-1.3rem] left-[-1.5rem] hidden group-hover:block"
                src={Point} alt="" />
            <div className="bg-white rounded-full px-4 py-2 flex gap-8 " >
                <img className="size-6" src={leadingIcon} />
                <p className="group-hover:underline ">{text}</p>
                <img className="size-6" src={trailingIcon} />
            </div>
        </div>
    )
}

export default MyButton
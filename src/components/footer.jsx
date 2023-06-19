import { AiOutlineCopyrightCircle } from "react-icons/ai"

const Footer = ({active}) => {
    return (
        <div className="flex flex-row-reverse lg:items-center w-full justify-between bg-[#eaeaea] px-7 py-2">
            <div className="flex justify-start">
               {active == "home" && <img src="https://content.myaya.ayahealthcare.com/utRkK4CLxk48NrroaD8mwCS-e6k/guide-media-bbb9a0ea-206c-4a2a-bfd9-fbc31d4cb810" alt="" />}
            </div>
            <div>
                <div className="flex items-center">
                    <AiOutlineCopyrightCircle />
                    <span className="pl-1">
                        Aya Healthcare | v8.5.0
                    </span>
                </div>
                <div className="flex gap-8">
                    <a href="#">Terms of use</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Arbitration agreement</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
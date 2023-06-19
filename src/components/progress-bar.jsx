import { FaUser } from "react-icons/fa"
import { IoMdBriefcase } from "react-icons/io"
import { FaGraduationCap } from "react-icons/fa"
import { AiFillFile } from "react-icons/ai"
import { MdMessage } from "react-icons/md"
import { BsCardChecklist } from "react-icons/bs"
import { Link } from "react-router-dom"

export default function ProgressBar({ active }) {
    return (
        <div className="flex rounded-lg justify-around flex-wrap py-3 gap-4" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
            <Link to={"/personal-info"} className={`flex flex-col items-center ${active === "personal info" && "border-b-4"} border-gray-700`}>
                <FaUser className="text-[#fcddce] text-[20px]" />
                Personal Info
            </Link>
            <Link to={"/work-history"} className={`flex flex-col items-center ${active === "work history" && "border-b-4"} border-gray-700`}>
                <IoMdBriefcase className="text-[#fcddce] text-[20px]" />
                Work history
            </Link>
            <Link to={"/education"} className={`flex flex-col items-center ${active === "education" && "border-b-4"} border-gray-700`}>
                <FaGraduationCap className="text-[#fcddce] text-[20px]" />
                Education
            </Link>
            <Link to={"/professional-info"} className={`flex flex-col items-center ${active === "professional info" && "border-b-4"} border-gray-700`}>
                <AiFillFile className="text-[#fcddce] text-[20px]" />
                Professional Info
            </Link>
            <Link to={"/references"} className={`flex flex-col items-center ${active === "references" && "border-b-4"} border-gray-700`}>
                <MdMessage className="text-[#fcddce] text-[20px]" />
                References
            </Link>
            <div className={`flex flex-col items-center ${active === "checklists" && "border-b-4"} border-gray-700`}>
                <BsCardChecklist className="text-[#fcddce] text-[20px]" />
                Checklists
            </div>
        </div>
    )
}
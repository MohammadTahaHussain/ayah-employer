import Navbar from "../components/navbar"
import { useState } from "react"
import { FaBars } from "react-icons/fa"

const JobProposalsPage = () => {
    const [navShown, setNavShown] = useState("hidden")
    const [showBar, setShowBar] = useState(true)
    const [showXmark, setShowXmark] = useState("hidden")
    const openNav = () => {
        setNavShown("block")
        setShowBar("hidden")
        setShowXmark("inline")
    }
    const closeNav = () => {
        setNavShown("hidden")
        setShowBar("inline")
        setShowXmark("hidden")
    }
    return (
        <Navbar active={"jobProposal"} navShow={navShown}>
            <div className="flex w-full bg-cyan-900 items-center fixed z-20">
                <FaBars className={`text-[20px] text-white relative left-4 lg:hidden ${showBar}`} onClick={openNav} />
                <span className={`text-[25px] ${showXmark} text-white font-bold relative left-72`} onClick={closeNav}>
                    X
                </span>
                <h1 className="text-center text-white py-4 w-full font-bold">Applied candidates</h1>
            </div>
            <div className="relative top-14">
                <div>

                </div>
            </div>
        </Navbar>
    )
}

export default JobProposalsPage
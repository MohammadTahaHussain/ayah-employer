import "../css/style.css"
import { Modal, Tabs } from 'antd';
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg"
import { useState, useEffect } from "react";
import * as Yup from "yup"
import { FaFileContract } from "react-icons/fa"
import { FaUsers } from "react-icons/fa"
import { RiFileUserLine } from "react-icons/ri"

const App = ({ active, children, navShow }) => {
    const [modal1Open, setModal1Open] = useState(false);
    const [personalizedLink, setPersonalizedLink] = useState("https://bit.ly/3Qe20Do")
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [isDisabledPhNo, setIsDisabledPhNo] = useState(true)
    const [email, setEmail] = useState(null)
    const [isDisabledEmail, setIsDisabledEmail] = useState(true)
    const phoneRegExp = /^(\+92|92|0)?(3\d{2}|5\d{2}|6\d{2}|7\d{2}|8\d{2})[ -]?\d{7}$/;


    const phoneNumberValidationSchema = Yup.object().shape({
        phoneNumber: Yup.string().required().matches(phoneRegExp, "Invalid Phone Number")
    })

    const emailValidationSchema = Yup.object().shape({
        email: Yup.string().required().email()
    })

    const tabItems = [
        {
            key: '1',
            label: `Copy`,
            children: <div>
                <div className="flex gap-x-2">
                    <div class="relative w-[75%]">
                        <input disabled value={personalizedLink} type="text" id="personalizedLink" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="personalizedLink" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Personalized Link</label>
                    </div>
                    <button className="bg-cyan-400 text-center text-sm w-24 rounded-full">
                        COPY
                    </button>
                </div>
            </div>,
        },
        {
            key: '2',
            label: `Text`,
            children: <div>
                <div className="flex gap-x-2">
                    <div class="relative w-[75%]">
                        <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" id="phoneNumber" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="phoneNumber" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Phone Number</label>
                    </div>
                    <button disabled={isDisabledPhNo} className="bg-cyan-400 text-sm text-center w-24 rounded-full disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-white">
                        SEND
                    </button>
                </div>
            </div>,
        },
        {
            key: '3',
            label: `Email`,
            children: <div className="flex gap-x-2">
                <div class="relative w-[75%]">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                </div>
                <button disabled={isDisabledEmail} className="bg-cyan-400 text-sm text-center w-24 rounded-full disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-white">
                    SEND
                </button>
            </div>
        },
    ];

    useEffect(() => {
        phoneNumberValidationSchema.validate({
            phoneNumber: phoneNumber
        }).then(() => {
            setIsDisabledPhNo(false)
        }).catch((e) => {
            setIsDisabledPhNo(true)
        })
    }, [phoneNumber])
    useEffect(() => {
        emailValidationSchema.validate({
            email: email
        }).then(() => {
            setIsDisabledEmail(false)
        }).catch((e) => {
            setIsDisabledEmail(true)
        })
    }, [email])


    return (
        <>
            <div className="flex">
                {/* Navbar  */}
                <div className={`w-[286px] max-w-[286px] ${navShow} lg:block h-screen z-50 fixed bg-white`}>
                    <div className="h-[15vh] w-[286px] shadow-xl flex justify-center relative items-center">
                        <img src={Logo} alt="logo" className="bg-white" />
                    </div>


                    <div className="bg-gray-100 h-[70vh]">
                        <div className={`flex items-center gap-x-3 ${active == "jobProposal" && "border-l-4"} ${active !== "jobProposal" && "pl-1"} border-myOrange h-12`}>
                            <div>
                                <FaFileContract className={`${active === "jobProposal" && "text-myOrange"} text-xl`} />
                            </div>
                            <Link to={"/jobs/proposals"}>
                                Job proposals
                            </Link>
                        </div>
                        <div className={`flex items-center gap-x-3 ${active == "shortlisted" && "border-l-4"} ${active !== "shortlisted" && "pl-1"} border-myOrange h-12`}>
                            <div>
                                <FaUsers className={`${active == "shortlisted" && "text-myOrange"} text-xl`} />
                            </div>
                            <Link to={"/jobs/shortlisted"}>
                                Shortlisted candidates
                            </Link>
                        </div>
                        <div className={`flex items-center gap-x-3 ${active == "information" && "border-l-4"} ${active !== "information" && "pl-1"} border-myOrange h-12`}>
                            <div>
                                <RiFileUserLine className={`${active == "information" && "text-myOrange"} text-xl`} />
                            </div>
                            <Link to={"/jobs/candidates/info"}>
                                Candidates Information
                            </Link>
                        </div>
                    </div>

                    <div className="h-[15vh] bg-white shadow-xl absolute bottom-0 w-[286px] max-w-[286px]">
                        <div className="w-full h-full flex justify-center items-center">
                            <button className="uppercase px-3 border border-[#47d0e6] py-2 rounded-full">
                                My employes
                            </button>
                        </div>
                    </div>

                </div>
                {/* Content  */}
                <div className={`lg:ml-[288px] w-full`}>
                    {children}
                </div>
            </div >
            {/* <Modal
                title="Recommend your recruiter"
                centered
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
                bodyStyle={{ borderTop: "1px solid gray" }}
                footer={false}
            >
                <div className="py-2">
                    <h1 className="text-center text-sm">
                        Recommend your Aya recruiter to a friend using the personalized link below!
                    </h1>
                    <div className="recruiter-tabs">
                        <Tabs defaultActiveKey="1" items={tabItems} className="w-full pl-4" />
                    </div>
                </div>
            </Modal> */}
        </>

    )
}

export default App


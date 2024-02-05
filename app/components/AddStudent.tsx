'use client'
import Image from "next/image";
import {useState} from "react";
export default function AddStudent() {

    const image = "String";
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [course, setCourse] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const response = await fetch('/api/add/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image,
                firstName,
                lastName,
                course,
                password,
                email,
                phoneNumber,
            }),
        });

        const data = await response.json();

        console.log(data);

    }

    function toggleSlideover(): void {
        const slideoverContainer = document.getElementById('slideover-container');
        const slideoverBg = document.getElementById('slideover-bg');
        const slideover = document.getElementById('slideover');
        const body = document.body;

        if (slideoverContainer) {
            slideoverContainer.classList.toggle('invisible');
            // If slideoverContainer is visible, disable the scrollbar
            if (slideoverContainer.classList.contains('invisible')) {
                body.style.overflow = 'auto';
            } else {
                body.style.overflow = 'hidden';
            }
        }

        if (slideoverBg) {
            slideoverBg.classList.toggle('opacity-0');
            slideoverBg.classList.toggle('opacity-50');
        }

        if (slideover) {
            slideover.classList.toggle('translate-x-full');
        }
    }

    return (
        <>
            <button
                onClick={toggleSlideover}
                className="rounded-xl h-16 w-1/5 bg-[#5C93FA] shadow-all-sides font-semibold text-white hover:bg-[#4367B7] active:bg-[#314F8E] flex justify-center items-center"><Image src="/addIcon.svg" alt="addIcon" width="25" height="25" className="mr-2"/> Add Student
            </button>

            <div id="slideover-container" className="w-full h-full fixed inset-0 invisible">
                <div onClick={toggleSlideover} id="slideover-bg"
                     className="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-300 opacity-0">
                </div>
                <div id="slideover"
                     className="w-2/5 bg-white h-full absolute right-0 duration-300 ease-out transition-all translate-x-full">
                    <div className="flex flex-col pt-10 pr-8 pl-8">
                        <div className="flex space-x-8 items-center">
                            <Image onClick={toggleSlideover} className="cursor-pointer hover:-translate-x-1 transition-transform" src="./leftArrowIcon.svg"
                                   alt="leftArrow" width="30" height="30"/>
                            <h1 className="font-bold text-3xl cursor-default">Add Student</h1>
                            <button
                                onClick={handleSubmit}
                                className="relative left-48 rounded-xl h-12 w-1/6 bg-[#5C92F7] shadow-all-sides font-semibold text-white transition-all hover:bg-[#4367B7] active:bg-[#314F8E]">Add
                            </button>
                        </div>
                        <div className="bg-[#5C92F7] self-center relative top-20 rounded-full h-36 w-36 flex justify-end items-end">
                            <div className="flex justify-center items-center rounded-full w-10 h-10 bg-[#D9D9D9]">
                                <Image src="./cameraIcon.svg" alt="cameraIcon" width="20" height="20"/>
                            </div>
                        </div>

                        <div className="relative top-36 flex flex-wrap space-x-6 space-y-3 justify-center items-center">
                            <div className="flex flex-col justify-center items-start space-y-1 relative left-3">
                                <label className="font-medium">First Name</label>
                                <input
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                    className="rounded-lg h-12 w-64 border-2 border-[#DBDADA] pl-2 focus:outline-[#5C93FA]"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start space-y-1 relative left-3">
                                <label className="font-medium">Last Name</label>
                                <input
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                    className="rounded-lg h-12 w-64 border-2 border-[#DBDADA] pl-2 focus:outline-[#5C93FA]"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start space-y-1">
                                <label className="font-medium">Course</label>
                                <input
                                    onChange={(e) => setCourse(e.target.value)}
                                    value={course}
                                    className="rounded-lg h-12 w-64 border-2 border-[#DBDADA] pl-2 focus:outline-[#5C93FA]"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start space-y-1">
                                <label className="font-medium">Password</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    type="password"
                                    className="rounded-lg h-12 w-64 border-2 border-[#DBDADA] pl-2 focus:outline-[#5C93FA]"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start space-y-1">
                                <label className="font-medium">Email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type={"email"}
                                    className="rounded-lg h-12 w-64 border-2 border-[#DBDADA] pl-2 focus:outline-[#5C93FA]"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start space-y-1">
                                <label className="font-medium">Phone number</label>
                                <input
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    value={phoneNumber}
                                    className="rounded-lg h-12 w-64 border-2 border-[#DBDADA] pl-2 focus:outline-[#5C93FA]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
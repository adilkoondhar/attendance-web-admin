'use client'
import Image from "next/image";
export default function AddStudent() {

    function toggleSlideover(): void {
        const slideoverContainer = document.getElementById('slideover-container');
        const slideoverBg = document.getElementById('slideover-bg');
        const slideover = document.getElementById('slideover');

        if (slideoverContainer) {
            slideoverContainer.classList.toggle('invisible');
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
                     className="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-300 opacity-0"></div>
                <div id="slideover"
                     className="w-96 bg-white h-full absolute right-0 duration-300 ease-out transition-all translate-x-full">
                    <div
                        className="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5">
                    </div>
                </div>
            </div>
        </>
    )
}
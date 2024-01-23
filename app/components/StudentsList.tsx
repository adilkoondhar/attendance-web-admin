'use client'
import Image from "next/image";

export default function StudentsList(props: {id: number, profile: string, name: string, course: string, password: string}) {

    const {id, profile, name, course, password} = props;

    return (
        <div className="mb-6 pl-4 pr-4 rounded-md flex justify-between items-center bg-white h-20 text-[#282827] font-medium text-center">
            <div className="w-16">{id}</div>
            <div className="w-40">{profile}</div>
            <div className="w-52">{name}</div>
            <div className="w-48">{course}</div>
            <div className="w-40">{password}</div>
            <div className="w-40 flex justify-center items-center space-x-12">
                <Image className="cursor-pointer" src="./penIcon.svg" alt="pen" height="16" width="16" />
                <Image className="cursor-pointer" src="./eyeIcon.svg" alt="pen" height="16" width="18" />
            </div>
        </div>
    )
}
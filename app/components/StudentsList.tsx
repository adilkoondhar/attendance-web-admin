'use client'
import Image from "next/image";
import useSWR from "swr";

// @ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) => res.json())
export default function StudentsList() {

    const { data, error, isLoading } = useSWR('/api/students', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    if (data) {
        return (
            <>
                {data.map((student: any) => (
                    <div key={student.id}
                         className="mb-6 pl-4 pr-4 rounded-md flex justify-between items-center bg-white h-20 text-[#282827] font-medium text-center">
                        <div className="w-16">{student.id}</div>
                        <div className="w-40">{student.image}</div>
                        <div className="w-52">{student.fullName}</div>
                        <div className="w-48">{student.course}</div>
                        <div className="w-40">{student.password.slice(0, 8).replace(/./g, '*')}</div>
                        <div className="w-40 flex justify-center items-center space-x-12">
                            <Image className="cursor-pointer" src="./penIcon.svg" alt="pen" height="16" width="16"/>
                            <Image className="cursor-pointer" src="./eyeIcon.svg" alt="pen" height="16" width="18"/>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}
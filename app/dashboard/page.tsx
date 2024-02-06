'use client'
import Image from "next/image";
import Link from "next/link";
import AddStudent from "@/app/components/AddStudent";
import StudentsList from "@/app/components/StudentsList";
import dummyData from "@/public/dummyData.json";
import {useRouter} from "next/navigation";
export default function Dashboard() {

    const router = useRouter();

    let token: any = null;

    try {
        token = localStorage.getItem('token');
    } catch (e) {
        token = null;
    }

    const students = JSON.stringify(dummyData);
    const studentsArray = JSON.parse(students);

    if(token) {
        return (
            <main className="flex">
                <div className="bg-white flex flex-col items-center justify-between w-1/5 min-h-screen pt-16 pb-10">
                    <div className="fixed flex flex-col items-center space-y-6">
                        <h1 className="text-4xl font-bold mb-2">Logo</h1>
                        <div className="flex space-x-3.5 justify-start items-center w-60">
                            <div className="rounded-full w-14 h-14 bg-[#F5F5F5] flex justify-center items-center">
                                <Image src={"./studentIcon.svg"} alt={"add icon"} width={"25"} height={"30"}/>
                            </div>
                            <Link href="/dashboard" className="text-2xl font-medium text-black">Students</Link>
                        </div>
                        <div className="flex space-x-3.5 justify-start items-center w-60">
                            <div className="rounded-full w-14 h-14 bg-[#F5F5F5] flex justify-center items-center">
                                <Image src={"./attendanceIcon.svg"} alt={"attendance icon"} width={"25"} height={"30"}/>
                            </div>
                            <Link href="/dashboard/attendance"
                                  className="text-2xl font-medium text-[#757474] hover:text-black">Attendance</Link>
                        </div>
                    </div>
                    <Link href="/login"
                          onClick={() => localStorage.removeItem("token")}
                          className="fixed bottom-10 text-2xl font-medium text-[#1E1E1E] ml-12 self-start hover:text-[#5C93FA]">Logout</Link>
                </div>
                <div className="bg-[#F8F8F8] flex flex-col w-4/5 min-h-screen pt-14 pl-12 pr-16">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center space-x-6">
                            <div className="rounded-full w-20 h-20 bg-[#5C93FA] flex justify-center items-center">
                                <Image src={"./studentIconWhite.svg"} alt={"add icon"} width={"25"} height={"30"}/>
                            </div>
                            <h1 className="text-4xl font-bold mb-2">Students</h1>
                        </div>
                        <AddStudent/>
                    </div>

                    <div
                        className="mt-12 mb-10 pl-4 pr-4 rounded-xl flex justify-between items-center bg-[#5C93FA] h-20 text-white shadow-all-sides font-semibold text-center">
                        <div className="w-16">ID</div>
                        <div className="w-40">Profile Image</div>
                        <div className="w-52">Name</div>
                        <div className="w-48">Course Name</div>
                        <div className="w-40">Password</div>
                        <div className="w-40"></div>
                    </div>
                    {studentsArray.map((student: {
                        ID: number,
                        ProfileImage: string,
                        Name: string,
                        CourseName: string,
                        Password: string
                    }) => (
                        <StudentsList key={student.ID}
                                      id={student.ID}
                                      profile={student.ProfileImage}
                                      name={student.Name}
                                      course={student.CourseName}
                                      password={student.Password}
                        />
                    ))}
                </div>
            </main>
        )
    } else {
        router.push('login');
    }
}
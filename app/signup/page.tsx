import SignupForm from "@/app/components/SignupForm";
import Link from "next/link";
export default function Signup() {

    return (
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#8FABDF] from-50% to-white to-50%">
            <div
                className="flex space-y-8 flex-col justify-center items-center w-4/5 h-[43rem] rounded-2xl shadow-all-sides bg-white">
                <h1 className="text-4xl font-bold">Signup</h1>
                <SignupForm/>
            </div>
            <Link href="/login"
                  className="absolute right-44 bottom-[4.7rem] text-xl font-medium text-[#1E1E1E] ml-12 hover:text-[#5C93FA]">login
            </Link>
        </main>
    )
}
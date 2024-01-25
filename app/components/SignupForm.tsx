'use client'
export default function SignupForm() {

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={onSubmit} className="flex space-y-8 flex-col justify-center items-center w-[20rem]">
            <input
                className="rounded-xl h-12 w-[20rem] border-2 border-[#DBDADA] bg-gradient-to-r from-[#5C93FA] from-[3%] to-white to-[3%] shadow-all-sides pl-8 placeholder:font-[400] placeholder:text-[#DBDADA] focus:outline-[#5C93FA]"
                placeholder="Email"/>
            <input
                className="rounded-xl h-12 w-[20rem] border-2 border-[#DBDADA] bg-gradient-to-r from-[#5C93FA] from-[3%] to-white to-[3%] shadow-all-sides pl-8 placeholder:font-[400] placeholder:text-[#DBDADA] focus:outline-[#5C93FA]"
                placeholder="Password"/>
            <input
                className="rounded-xl h-12 w-[20rem] border-2 border-[#DBDADA] bg-gradient-to-r from-[#5C93FA] from-[3%] to-white to-[3%] shadow-all-sides pl-8 placeholder:font-[400] placeholder:text-[#DBDADA] focus:outline-[#5C93FA]"
                placeholder="Repeat Password"/>
            <button
                className="rounded-xl h-12 w-2/6 bg-[#5C92F7] shadow-all-sides font-medium text-white transition-all hover:bg-[#4367B7] active:bg-[#314F8E]">Signup
            </button>
        </form>
    )
}
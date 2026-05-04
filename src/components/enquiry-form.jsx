const EnquiryForm = () => {
    return (
        <div>
            <form className={"space-y-6"}>
                <div className={"grid md:grid-cols-2 gap-4"}>
                    <div className={""}>
                        <label htmlFor="firstName" className="">
                            First Name<span className="text-primary">*</span>
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="w-full p-2 bg-white border border-[#ccc] focus:border-primary outline-none"
                        />
                    </div>

                    <div className={""}>
                        <label htmlFor="lastName" className="">
                            Last Name<span className="text-primary">*</span>
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="w-full p-2 bg-white border border-[#ccc] focus:border-primary outline-none"
                        />
                    </div>
                </div>

                <div className={"grid md:grid-cols-1 gap-4"}>

                    <div className={""}>
                        <label htmlFor="email" className="">
                            Email<span className="text-primary">*</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            required
                            className="w-full p-2 bg-white border border-[#ccc] focus:border-primary outline-none"
                        />
                    </div>

                </div>

                <div className={"grid md:grid-cols-2 gap-4"}>
                    <div className={""}>
                        <label htmlFor="phone" className="">
                            Phone
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"

                            className="w-full p-2 bg-white border border-[#ccc] focus:border-primary outline-none"
                        />
                    </div>

                    <div className={""}>
                        <label htmlFor="company" className="">
                            Company
                        </label>
                        <input
                            id="company"
                            name="company"
                            type="text"

                            className="w-full p-2 bg-white border border-[#ccc] focus:border-primary outline-none"
                        />
                    </div>
                </div>

                <div className={"grid md:grid-cols-1 gap-4 py-2"}>
                    <div className={"flex flex-col"}>
                        <label htmlFor="message" className="my-2">
                            Message
                        </label>
                        <textarea id="message" className="h-48 border border-[#ccc] p-2 outline-none" />
                    </div>
                </div>




                <div className={"grid md:grid-cols-1 gap-4"}>
                    <button type="submit" className="bg-primary text-white py-2 px-4 hover:opacity-90 transition-opacity">
                        Submit
                    </button>
                </div>


            </form>

        </div>
    )
}
export default EnquiryForm

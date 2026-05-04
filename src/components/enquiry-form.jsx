import Selectors from "@/components/selectors.jsx";

const EnquiryForm = () => {
    return (
        <div>
            <form className={"space-y-6"}>
                <div className={"grid md:grid-cols-1 gap-4 mx-50 my-10 text-black"}>
                    <div className={""}>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="w-full p-2 bg-white border border-[#ccc] outline-none placeholder-grey uppercase"
                            placeholder={"first name*"}
                        />
                    </div>

                    <div className={""}>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="w-full p-2 uppercase bg-white border border-[#ccc] focus:border-primary outline-none placeholder-grey"
                            placeholder={"last name*"}
                        />
                    </div>

                <div className={"grid md:grid-cols-1 gap-4"}>
                    <div className={""}>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            required
                            className="w-full p-2 bg-white border border-[#ccc] focus:border-primary outline-none placeholder-grey uppercase"
                            placeholder={"e-mail*"}
                        />
                    </div>
                </div>

                <div className={"grid gap-4"}>
                    <div className={""}>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            required
                            placeholder={"mobile*"}
                            className="w-full p-2 bg-white border border-[#ccc] focus:border-primary outline-none uppercase placeholder-grey"
                        />
                    </div>

                    <div className={""}>
                        <label htmlFor="date" className="uppercase text-bar-bambi-gold">
                            function Date*
                        </label>
                        <input
                            id="date"
                            name="date"
                            type="date"
                            required
                            className="w-full p-2 bg-white border border-[#ccc] outline-none uppercase placeholder-grey "
                        />
                    </div>

                    <div className={""}>
                        <label htmlFor={"time"} className={"uppercase text-bar-bambi-gold"}>
                            start time*
                        </label>
                        <input
                            id="start-time"
                            name="start time"
                            type="time"
                            required
                            className="w-full p-2 bg-white border border-[#ccc] focus:border-primary outline-none uppercase placeholder-grey"
                        />
                    </div>
                    <div className={""}>
                        <label htmlFor={"time"} className={"uppercase text-bar-bambi-gold"}>
                            end time*
                        </label>
                        <input
                            id="end-time"
                            name="end time"
                            type="time"
                            required
                            className="w-full p-2 bg-white border border-[#ccc] focus:border-primary outline-none uppercase placeholder-grey"
                        />
                    </div>
                    <div className={""}>
                        <input
                            id="occasion"
                            name="occasion"
                            type="text"
                            required
                            placeholder={"occasion*"}
                            className="w-full p-2 bg-white border border-[#ccc] focus:border-primary outline-none uppercase placeholder-grey"
                        />
                    </div>
                    <div className={""}>
                        <input
                            id="guests"
                            name="guests"
                            type="text"
                            required
                            placeholder={"number of guests*"}
                            className="w-full p-2 bg-white border border-[#ccc] focus:border-primary outline-none uppercase placeholder-grey"
                        />
                    </div>
                    <select
                        className={"bg-white p-2 italic w-full"}
                        defaultValue=""
                    >
                        <option value={""} disabled hidden>
                            Stand or Sit Down?*
                        </option>
                        <option>Stand</option>
                        <option>Sit down</option>
                    </select>

                    <div className={""}>
                        <input
                            id="budget"
                            name="budget"
                            type="text"
                            required
                            placeholder={"budget*"}
                            className="w-full p-2 bg-white border border-[#ccc] focus:border-primary outline-none uppercase placeholder-grey"
                        />
                    </div>


                </div>

                <div className={"grid md:grid-cols-1 gap-4 py-2"}>
                    <div className={"flex flex-col"}>
                        <textarea id="message" className="h-48 border bg-white uppercase border-[#ccc] p-2 outline-none placeholder-grey" placeholder={"other comments / notes"} />
                    </div>
                </div>




                <div className={"grid md:grid-cols-1 gap-4"}>
                    <Selectors title={"Submit"} className={""}/>
                </div>


                </div>
            </form>

        </div>
    )
}
export default EnquiryForm

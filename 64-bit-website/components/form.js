import React, { useState, useRef } from "react";
import { sendContactForm } from "../firebase/cloudFirestore/Write.js";

export default function Form() {
    const [message, setMessage] = useState("");
    const formRef = useRef();
    const sendData = async (e) => {
        e.preventDefault();
        console.log(e);
        const res = await sendContactForm({
            fname: e.target[0].value,
            lname: e.target[1].value,
            email: e.target[2].value,
            amt: e.target[3].value,
            charity: e.target[4].value,
        });
        if (res == 0) {
            setMessage("Thank you for your valuable comment!");
            formRef.current.reset();
        } else {
            setMessage("Something went wrong! Please try again");
        }
    };

    return (
        <form ref={formRef} className="flex flex-col justify-center items-center gap-[7vw] md:gap-[5vw] pb-[5vw] pt-[1vw]" id="donationForm" onSubmit={sendData}>
            <div className="flex flex-row items-center font-Inter font-bold lg:text-[1.5vw] text-xl px-[3vw]">
                **
                <h1 className="underline flex text-center px-[1vw] leading-relaxed tracking-normal">
                    If you are considering donating or have already donated to one of the charities below,
                    PLEASE fill out this form. It would mean a lot to the members of the 64 Bit Jazz Combo.
                </h1>
                **
            </div>
            <div className="flex flex-col justify-center items-center gap-[7vw] md:gap-[5vw] border-2 border-gray-600 sm:p-[3vw] p-[2em]">
                <div className="flex flex-col md:flex-row gap-[7vw] md:gap-[1vw] px-[1vw] items-center">
                    <div className="flex flex-col justify-center group">
                        <input 
                            className="font-RobotoC lg:text-[2em] text-[1.25em] rounded-none z-10 bg-transparent p-[0.5vw] border-b-2 border-black focus:border-black md:w-[25vw] w-[300px] focus:outline-none peer"
                            type="text" id="fname" name="fname" placeholder=" " required />
                        <label htmlFor="fname" className="z-40 peer-focus:z-40 peer-placeholder-shown:z-0 absolute font-RobotoC ml-[0.5vw] lg:text-[1.5vw] text-[1em] text-black duration-300 ease-in-out transition scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 -translate-y-[100%] peer-focus:-translate-y-[100%] -translate-x-[17%] peer-focus:-translate-x-[17%] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:text-gray-600 peer-focus:text-black">
                            First Name
                        </label>
                    </div>
                    <div className="flex flex-col justify-center group">
                        <input 
                            className="font-RobotoC lg:text-[2em] text-[1.25em] rounded-none text-black z-10 bg-transparent p-[0.5vw] border-b-2 border-black md:w-[25vw] w-[300px] focus:outline-none peer"
                            type="text" id="fname" name="lname" placeholder=" " required />
                        <label htmlFor="lname" className="z-40 peer-focus:z-40 peer-placeholder-shown:z-0 absolute font-RobotoC ml-[0.5vw] lg:text-[1.5vw] text-[1em] text-black duration-300 ease-in-out transition scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 -translate-y-[100%] peer-focus:-translate-y-[100%] -translate-x-[17%] peer-focus:-translate-x-[17%] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:text-gray-600 peer-focus:text-black">
                            Last Name
                        </label>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-[7vw] md:gap-[1vw] px-[1vw] items-center">
                    <div className="flex flex-col justify-center group md:w-[51vw] w-[300px] border-b-2 border-black p-[0.5vw]">
                        <select
                            id="charity" name="charity"
                            className="ease-in-out duration-300 lg:text-[1.5vw] text-[1em] font-RobotoC text-gray-600 outline-none focus:ring-0 focus:text-black"
                            required defaultValue="">
                            <option value="" disabled hidden>Charity You Donated To</option>
                            <option value="Hugs For Brady">Hugs For Brady</option>
                            <option value="St. Jude">St. Jude Children&apos;s Research Hospital</option>
                            <option value="SAVE">SAVE</option>
                            <option value="Make-A-Wish">Make-A-Wish Foundation New Jersey</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-[7vw] md:gap-[1vw] px-[1vw] items-center">
                    <div className="flex flex-col justify-center group">
                        <input 
                            className="font-RobotoC lg:text-[2em] text-[1.25em] rounded-none text-black z-10 bg-transparent p-[0.5vw] border-b-2 border-black md:w-[15vw] w-[300px] focus:outline-none peer"
                            type="number" id="money" name="money" placeholder=" " min="1" required />
                        <label htmlFor="money" className="z-40 peer-focus:z-40 peer-placeholder-shown:z-0 absolute font-RobotoC ml-[0.5vw] lg:text-[1.5vw] text-[1em] text-black duration-300 ease-in-out transition scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 -translate-y-[100%] peer-focus:-translate-y-[100%] -translate-x-[15%] peer-focus:-translate-x-[15%] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:text-gray-600 peer-focus:text-black">
                            Donated Amount
                        </label>
                        <label htmlFor="money" className="z-40 peer-focus:z-40 peer-placeholder-shown:z-0 absolute font-RobotoC lg:-ml-[1%] -ml-[2%] lg:text-[2em] text-[1.25em] text-black duration-300 ease-in-out transition opacity-100 peer-focus:opacity-100 peer-placeholder-shown:opacity-0">
                            $
                        </label>
                    </div>
                    <div className="flex flex-col justify-center group">
                        <input 
                            className="font-RobotoC lg:text-[2em] text-[1.25em] rounded-none text-black z-10 bg-transparent p-[0.5vw] border-b-2 border-black md:w-[35vw] w-[300px] focus:outline-none peer"
                            type="email" id="email" name="email" placeholder=" " required />
                        <label htmlFor="email" className="z-40 peer-focus:z-40 peer-placeholder-shown:z-0 absolute font-RobotoC ml-[0.5vw] lg:text-[1.5vw] text-[1em] text-black duration-300 ease-in-out transition scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 -translate-y-[100%] peer-focus:-translate-y-[100%] -translate-x-[16%] peer-focus:-translate-x-[16%] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:text-gray-600 peer-focus:text-black">
                            Email Address
                        </label>
                    </div>
                </div>
                <button type="submit" className="z-10 uppercase active:ring-4 bg-amber-400 ease-in-out transition w-[250px] p-[1vw] font-Poppins font-bold text-black md:text-[1vw] text-[1em] sm:hover:scale-125 sm:hover:bg-black sm:hover:text-amber-300">
                    submit
                </button>
            </div>
        </form>
    )
}
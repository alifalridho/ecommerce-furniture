import React from "react";
import Input from "./Input";

const InputContainer = ({ arrayinput }) => {
    return (
        <>
            <div className="flex flex-col gap-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {arrayinput.map((text, index) => (
                        <Input key={index} text={text} />
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    <textarea
                        name="coverLetter"
                        id="coverLetter"
                        placeholder="Why do you thing you are good fit for Ether?"
                        className="h-48 bg-slate-50 rounded-xl p-3"
                    />
                    <button className="bg-orange-500 lg:text-base md:text-xs py-2 px-7 rounded-full text-white font-semibold lg:w-48">
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default InputContainer;

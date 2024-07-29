import React from "react";
import { button, QR } from "../../assets/images/Footer/footer";

const FooterDownloadApp = () => {
    return (
        <div className="space-y-6">
            <p className="font-semibold">Download App</p>
            <div className="flex gap-2">
                <div>
                    <img src={QR} alt="QR Code" className="h-full" />
                </div>
                <div className="flex justify-between flex-col">
                    {button.map((btn, index) => (
                        <button key={index}>
                            <img src={btn} alt="Download Button" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterDownloadApp;

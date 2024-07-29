import React from "react";
import Section from "../../../components/Section";
import data from "../../../data.json";
import { Link } from "react-router-dom";

const FourthSection = () => {
    const title = data.main.shop.card[13].title;
    return (
        <>
            <div className="bg-yellow-50">
                <Section>
                    <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col gap-20">
                        <div className="">
                            <img
                                src="images/Fourth Section/Third Image 1.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col gap-10 items-center">
                            <div className="space-y-3 text-center">
                                <p className="font-medium">New Arrivals</p>
                                <p className="font-bold text-2xl w-56">
                                    Wooden Sofa Set with Blue Cushions
                                </p>
                            </div>
                            <Link to={`/shop/${title}`}>
                                <button className="px-10 py-2 border-[1px] border-black">
                                    Order Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default FourthSection;

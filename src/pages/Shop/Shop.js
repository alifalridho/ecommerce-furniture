import React, { useState } from "react";
import data from "../../data.json";
import FilterBar from "./FilterBar";
import ShopCard from "./ShopCard";
import Pagination from "./Pagination";
import Section from "../../components/Section";
import HeadingPage from "../../components/HeadingPage";

const Shop = () => {
    const [showResults, setShowResults] = useState(16);
    const [currentSort, setCurrentSort] = useState("Default");
    const [currentPage, setCurrentPage] = useState(1);

    const sortOptions = [
        "Default",
        "Price: Low to High",
        "Price: High to Low",
        "Name: A to Z",
        "Name: Z to A",
    ];
    const items = data.main.shop.card;

    const sortedItems = [...items].sort((a, b) => {
        if (currentSort === "Price: Low to High") {
            return (
                parseFloat(a.price.replace("$", "")) -
                parseFloat(b.price.replace("$", ""))
            );
        } else if (currentSort === "Price: High to Low") {
            return (
                parseFloat(b.price.replace("$", "")) -
                parseFloat(a.price.replace("$", ""))
            );
        } else if (currentSort === "Name: A to Z") {
            return a.name.localeCompare(b.name);
        } else if (currentSort === "Name: Z to A") {
            return b.name.localeCompare(a.name);
        }
        return 0;
    });

    const indexOfLastItem = currentPage * showResults;
    const indexOfFirstItem = indexOfLastItem - showResults;
    const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <Section>
            <HeadingPage head={"Shop"} page={"Shop"} />
            <div className="container mx-auto py-8">
                <FilterBar
                    totalResults={items.length}
                    showResults={showResults}
                    setShowResults={setShowResults}
                    sortOptions={sortOptions}
                    currentSort={currentSort}
                    setCurrentSort={setCurrentSort}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-16">
                    {currentItems.map((item, index) => (
                        <ShopCard key={index} item={item} />
                    ))}
                </div>
                <Pagination
                    totalItems={sortedItems.length}
                    itemsPerPage={showResults}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </Section>
    );
};

export default Shop;

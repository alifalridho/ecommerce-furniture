const Container = ({ children }) => {
    return (
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center pt-16">
            {children}
        </div>
    );
};

export default Container;

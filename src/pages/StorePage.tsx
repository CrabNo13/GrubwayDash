import StoreSection from "../components/StoreSection";

function StorePage() {
    return (
        <div className="flex flex-col w-full items-center">
            <header className="w-full h-96 bg-slate-300">This is the header of the store page</header>
            <div className="grid grid-cols-[60vw_auto] gap-4 h-96">
                <main className="bg-gray-100 p-4">
                    <StoreSection />
                    <StoreSection />
                    <StoreSection />
                    <StoreSection />
                    <StoreSection />
                </main>
                <aside className="bg-gray-200 p-4 w-[300px] h-64 sticky top-0">aside</aside>
            </div>
        </div>
    )
};

export default StorePage;
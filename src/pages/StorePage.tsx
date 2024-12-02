import StoreSection from "../components/StoreSection";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function StorePage() {
    const selectedStore = useSelector((state: RootState) => state.store.selectedStore);

    if (!selectedStore) {
        return null;
    }
    const sections = selectedStore.sections

    return (
        <div className="flex flex-col w-full items-center">
            <header className="w-full h-96 bg-slate-300">
                <h1>{selectedStore?.name}</h1>
                <p>{selectedStore?.description}</p>
                <p>{selectedStore?.rating}</p>
            </header>
            <div className="grid grid-cols-[60vw_auto] gap-4 h-fit">
                <main className="bg-gray-100 p-4">
                    {sections.map((section, index) => (
                        <StoreSection
                            key={index}
                            name={section.name}
                            items={section.items}
                        />
                    ))}
                </main>
                <aside className="bg-gray-200 p-4 w-[300px] h-64 sticky top-0">aside</aside>
            </div>
        </div>
    )
};

export default StorePage;
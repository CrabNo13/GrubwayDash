import SearchBar from "../components/SearchBar";
import HomeSection from "../components/HomeSection";

function HomePage() {
    const restaurantItems = [1, 2, 3, 4, 5];

    const discountItems = [100, 101, 102, 103, 104, 105];

    return <div className="flex flex-col w-full">
        <SearchBar />
        <HomeSection title="Popular" type="restaurant" items={restaurantItems} />
        <HomeSection title="Discounts" type="food" items={discountItems} />
    </div>
};

export default HomePage;
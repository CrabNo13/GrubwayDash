import SearchBar from "../components/SearchBar";
import Section from "../components/Section";

function HomePage() {
    const restaurantItems = [1, 2, 3, 4, 5];

    const discountItems = [100, 101, 102, 103, 104, 105];

    return <div className="flex flex-col w-full">
        <SearchBar />
        <Section title="Popular" type="restaurant" items={restaurantItems} />
        <Section title="Discounts" type="food" items={discountItems} />
    </div>
};

export default HomePage;
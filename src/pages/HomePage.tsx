import SearchBar from "../components/SearchBar";
import Section from "../components/Section";

function HomePage() {
    return <div className="flex flex-col flex-1 ml-64 p-4">
        <SearchBar />
        <Section />
    </div>
};

export default HomePage;
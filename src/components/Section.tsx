import HomeItem from "./HomeItem";

function Section() {
    return <section className="border-2 ">
        <h1>Popular in your Area</h1>
        <div className="flex flex-row justify-start">
            <div className="border-4 p-4">
                <h2>McConnan's</h2>
                <p>1.2km</p>
            </div>
            <div className="border-4 p-4">
                <h2>Hummus</h2>
                <p>0.9km</p>
            </div>
            <div className="border-4 p-4">
                <h2>Bob's Burgers</h2>
                <p>0.5km</p>
            </div>
            <div className="border-4 p-4">
                <h2>Bob's Burgers</h2>
                <p>0.5km</p>
            </div>
            <HomeItem id={1} type="restaurant" />
            <HomeItem id={101} type="food" />
        </div>
    </section>
};

export default Section;
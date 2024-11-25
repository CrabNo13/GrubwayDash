const restaurants = [
    { id: 1, name: "Pizza Palace", rate: 4.5, distance: 2, image: "pizza.png" },
];
const discountedItems = [
    {
        id: 101,
        name: "Pepperoni Pizza",
        image: "pepperoni.png",
        discountPercent: 20,
        discountedPrice: 8,
        originalPrice: 10,
    },
];

interface Props {
    id: number;
    type: "restaurant" | "food";
}

function HomeItem({ id, type }: Props) {
    let data;

    if (type === "restaurant") {
        data = restaurants.find((restaurant) => restaurant.id === id);
        if (!data) return null;

        const deliveryFee = (data.distance * 1.15).toFixed(2);

        return (
            <div className="border p-4">
                <img src={data.image} alt={`${data.name} logo`} />
                <h2>{data.name}</h2>
                <p>{data.rate}⭐</p>
                <p>{data.distance} km</p>
                <p>£{deliveryFee} delivery</p>
            </div>
        );
    }

    if (type === "food") {
        data = discountedItems.find((item) => item.id === id);
        if (!data) return null;
        return (
            <div className="border p-4">
                <img src={data.image} alt={`${data.name}`} />
                <div className="badge">{data.discountPercent}% OFF</div>
                <h2>{data.name}</h2>
                <p>
                    <span className="line-through">£{data.originalPrice}</span> £{data.discountedPrice}
                </p>
            </div>
        );
    }

    return null;
}

export default HomeItem;
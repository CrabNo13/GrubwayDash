const restaurants = [
    { id: 1, name: "Pizza Palace", rate: 4.5, distance: 0.6, image: "pizzapalace.png" },
    { id: 2, name: "Bob's Burgers", rate: 4.3, distance: 1.2, image: "bobsburgers.png" },
    { id: 3, name: "Miranda", rate: 4.5, distance: 2, image: "miranda.png" },
    { id: 4, name: "Burger Palace", rate: 4.4, distance: 0.8, image: "burgerpalace.png" },
    { id: 5, name: "Mary's Pizzas", rate: 4.0, distance: 1.4, image: "maryspizzas.png" },
    { id: 6, name: "Quack Donald's", rate: 4.2, distance: 1.7, image: "cuackdonalds.png" },
    { id: 7, name: "Jentor", rate: 4.1, distance: 0.9, image: "jentor.png" },
    { id: 8, name: "Big Papa's", rate: 4.2, distance: 1.3, image: "bigpapas.png" },
    { id: 9, name: "GoalGlup", rate: 4.8, distance: 1.9, image: "goalgulp.png" },
];
const discountedItems = [
    {
        id: 100,
        name: "Pepperoni Pizza",
        image: "pepperoni.png",
        discountPercent: 20,
        discountedPrice: 8,
        originalPrice: 10,
    },
    {
        id: 101,
        name: "Pepperoni Pizza",
        image: "pepperoni.png",
        discountPercent: 20,
        discountedPrice: 8,
        originalPrice: 10,
    },
    {
        id: 102,
        name: "Pepperoni Pizza",
        image: "pepperoni.png",
        discountPercent: 20,
        discountedPrice: 8,
        originalPrice: 10,
    },
    {
        id: 103,
        name: "Pepperoni Pizza",
        image: "pepperoni.png",
        discountPercent: 20,
        discountedPrice: 8,
        originalPrice: 10,
    },
    {
        id: 104,
        name: "Pepperoni Pizza",
        image: "pepperoni.png",
        discountPercent: 20,
        discountedPrice: 8,
        originalPrice: 10,
    }
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
            <div className="border p-4 m-1 flex-shrink-0 w-72">
                <img src={data.image} alt={`${data.name} logo`} />
                <h2 className="font-bold">{data.name}</h2>
                <p className="text-green-600">{data.rate}⭐</p>
                <p>{data.distance} km</p>
                <p>£{deliveryFee} delivery</p>
            </div>
        );
    }

    if (type === "food") {
        data = discountedItems.find((item) => item.id === id);
        if (!data) return null;
        return (
            <div className="border p-4 m-1 flex-shrink-0 w-72">
                <img src={data.image} alt={`${data.name}`} />
                <div className="badge">{data.discountPercent}% OFF</div>
                <h2 className="font-bold">{data.name}</h2>
                <p className="text-green-600">
                    £{data.discountedPrice} <span className="line-through text-gray-400">£{data.originalPrice}</span>
                </p>
            </div>
        );
    }

    return null;
}

export default HomeItem;
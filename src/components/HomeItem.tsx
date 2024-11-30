import itemsData from '../assets/Items.json';
import storesData from '../assets/Stores.json';

interface Store {
    name: string;
    description: string;
    image: string;
    rating: number;
    distance: number;
    type: string[];
    tags: string[];
    sections: { name: string; items: number[] }[];
};

interface Item {
    name: string;
    description: string;
    price: number;
    image: string;
    weight: number;
    type: string[];
    calories: number;
    tags: string[];
};

const stores: { [key: string]: Store } = storesData;
const items: { [key: string]: Item } = itemsData;

interface Props {
    id: number;
    type: "restaurant" | "food";
}

function HomeItem({ id, type }: Props) {
    let data;

    if (type === "restaurant") {
        data = stores[id];

        if (!data) return null;

        const deliveryFee = (data.distance * 1.15).toFixed(2);

        return (
            <div className="border p-4 m-1 flex-shrink-0 w-72">
                <img src={data.image} alt={`${data.name} logo`} />
                <h2 className="font-bold">{data.name}</h2>
                <p className="text-green-600">{data.rating}⭐</p>
                <p>{data.distance} km</p>
                <p>£{deliveryFee} delivery</p>
            </div>
        );
    }

    if (type === "food") {
        data = items[id];
        if (!data) return null;
        return (
            <div className="border p-4 m-1 flex-shrink-0 w-72">
                <img src={data.image} alt={`${data.name}`} />
                {/* <div className="badge">{data.discountPercent}% OFF</div> */}
                <h2 className="font-bold">{data.name}</h2>
                {/* <p className="text-green-600">
                    £{data.discountedPrice} <span className="line-through text-gray-400">£{data.originalPrice}</span>
                </p> */}
            </div>
        );
    }

    return null;
}

export default HomeItem;
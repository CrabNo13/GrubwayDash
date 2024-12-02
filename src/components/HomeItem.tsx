import itemsData from '../assets/Items.json';
import storesData from '../assets/Stores.json';
import { useDispatch } from 'react-redux';
import { setSelectedStore } from '../store/slices/storeSlice';
import { Navigate, useNavigate } from 'react-router-dom';

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
    store: number;
};

const stores: { [key: string]: Store } = storesData;
const items: { [key: string]: Item } = itemsData;

interface Props {
    id: number;
    type: "restaurant" | "food";
}

function HomeItem({ id, type }: Props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (type === "restaurant") {
        const data = stores[id];

        if (!data) return null;

        const deliveryFee = (data.distance * 1.15).toFixed(2);

        return (
            <div
                className="border p-4 m-1 flex-shrink-0 w-72"
                onClick={() => {
                    dispatch(setSelectedStore(data));
                    navigate("/store")
                }}
            >
                <img src={data.image} alt={`${data.name} logo`} />
                <h2 className="font-bold">{data.name}</h2>
                <p className="text-green-600">{data.rating}⭐</p>
                <p>{data.distance} km</p>
                <p>£{deliveryFee} delivery</p>
            </div>
        );
    }

    if (type === "food") {
        const data = items[id];

        if (!data) return null;

        const storeData = stores[data.store]

        return (
            <div
                className="border p-4 m-1 flex-shrink-0 w-72"
                onClick={() => dispatch(setSelectedStore(storeData))}
            >
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
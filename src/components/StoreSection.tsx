interface Props {
    name: string,
    items: number[]
}

function StoreSection({ name, items }: Props) {
    return (
        <div className="bg-blue-200 h-56 border-4 content-center">
            <h2>{name}</h2>
            <p>{items.toString()}</p>
        </div>
    )
};

export default StoreSection;
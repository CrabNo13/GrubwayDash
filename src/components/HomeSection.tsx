import { useRef } from "react";
import HomeItem from "./HomeItem";

interface SectionProps {
    title: string;
    type: "restaurant" | "food"
    items: number[];
}

function Section({ title, type, items }: SectionProps) {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -600, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 600, behavior: "smooth" });
        }
    };

    return (
        <section className="border-2 w-[70%] self-center p-2">
            <h1 className="font-bold text-xl ml-4">{title}</h1>
            <div className="relative">
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full"
                >
                    ◀
                </button>

                <div
                    className="flex flex-row justify-start overflow-x-auto scroll-smooth hide-scrollbar"
                    ref={carouselRef}
                >
                    {items.map((item) => (
                        <HomeItem key={item} id={item} type={type} />
                    ))}
                </div>

                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full"
                >
                    ▶
                </button>
            </div>
        </section>
    );
};

export default Section;
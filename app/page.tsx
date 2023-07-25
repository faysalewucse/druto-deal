import Link from "next/link";
import { FcElectronics, FcCloth, FcSportsMode } from "react-icons/fc";
import { GiKitchenTap, GiLipstick } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { CgGames } from "react-icons/cg";
import { IoMdFitness } from "react-icons/io";
import Image from "next/image";
import banner1 from "@/assets/glasses.jpg";
import banner2 from "@/assets/electric.jpg";
import banner3 from "@/assets/kitchen.jpg";
import banner4 from "@/assets/car.jpg";
import ZoomImage from "@/components/ZoomImage";

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: <FcElectronics />,
  },
  {
    id: 2,
    name: "Clothing",
    icon: <FcCloth />,
  },
  {
    id: 3,
    name: "Home & Kitchen",
    icon: <GiKitchenTap />,
  },
  {
    id: 4,
    name: "Books",
    icon: <ImBooks />,
  },
  {
    id: 5,
    name: "Beauty & Personal Care",
    icon: <GiLipstick />,
  },
  {
    id: 6,
    name: "Toys & Games",
    icon: <CgGames />,
  },
  {
    id: 7,
    name: "Sports & Outdoors",
    icon: <FcSportsMode />,
  },
  {
    id: 8,
    name: "Health & Fitness",
    icon: <IoMdFitness />,
  },
  // Add more categories as needed
];

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/5 flex flex-col bg-gray-50 gap-5 p-5 my-5 rounded-xl shadow">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="flex items-center gap-2 hover:ml-1 transition-all duration-200 hover:text-orange-500"
          >
            <div className="text-xl">{category.icon}</div>
            {category.name}
          </Link>
        ))}
      </div>
      <div className="flex-grow p-5">
        <div className="grid grid-cols-12 gap-5">
          <ZoomImage className="col-span-8">
            <Image src={banner1} alt="banner-1" className="zoom-image" />
          </ZoomImage>
          <ZoomImage className="col-span-4">
            <Image src={banner2} alt="banner-1" className="zoom-image" />
          </ZoomImage>

          <ZoomImage className="col-span-4">
            <Image src={banner3} alt="banner-1" className="zoom-image" />
          </ZoomImage>
          <ZoomImage className="col-span-8">
            <Image src={banner4} alt="banner-1" className="zoom-image" />
          </ZoomImage>
        </div>
      </div>
    </div>
  );
}

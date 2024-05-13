import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiSend } from "react-icons/fi";


export default function Carousal() {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
  return (
    <div className="w-full h-[30vh] bg-white p-4 rounded-3xl">
      <Carousel responsive={responsive}>
        <div className="flex flex-col items-center justify-center w-20">
          <img src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D" className="h-14 w-14 rounded-full mb-2" />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm font-bold">Livia Bator</h1>
            <p className="text-sm font-semibold text-gray-500">CEO</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-20">
          <img
            src="https://images.pexels.com/photos/3768726/pexels-photo-3768726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-14 w-14 rounded-full mb-2"
          />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm">Randy Press</h1>
            <p className="text-sm font-semibold text-gray-500">Director</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-20">
          <img
            src="https://images.pexels.com/photos/3778602/pexels-photo-3778602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-14 w-14 rounded-full mb-2"
          />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm">Workman</h1>
            <p className="text-sm font-semibold text-gray-500">Designer</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-20">
          <img
            src="https://images.pexels.com/photos/3777551/pexels-photo-3777551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-14 w-14 rounded-full mb-2"
          />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm">Leo</h1>
            <p className="text-sm font-semibold text-gray-500">Artist</p>
          </div>
        </div>
      </Carousel>
      <form className="flex mt-8">
        <input type="text" placeholder="Write Amount" />
        <button className="bg-gray-200 h-10 w-32 rounded-full p-4 flex items-center justify-center">
          525.50
        </button>
        <button className="bg-blue-700 h-10 w-32 rounded-full gap-2 text-white p-4 flex items-center justify-center">
          Send <FiSend />
        </button>
      </form>
    </div>
  );
}
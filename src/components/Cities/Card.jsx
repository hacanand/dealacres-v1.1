import Image from "next/image";
const Card = ({ title, content }) => {
  return (
    <div className="bg-white border h-28 sm:h-24 w-72 mb-3 sm:w-64 md:w-80 mx-2 rounded-xl shadow-black shadow-md flex ">
      <div className="flex-shrink-0 h-28 sm:h-24 w-1/3 rounded-tl-xl rounded-bl-xl overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src="/home.jpg"
          height={96}
          width={96}
          alt="Image Description"
        />
      </div>
      <div className="flex flex-wrap w-2/3">
        <div className=" pb-4 p-4 flex flex-col h-full">
          <h3 className="text-lg font-bold text-gray-800">
            {title}
          </h3>
          <p className="mt-1 text-gray-800 sm:max-w-sm">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

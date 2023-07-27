import Image from 'next/image'
const Card = ({ title, content}) => {
    return (
<div class="flex flex-col mx-4 h-24 md:h-20 mb-4 mt-6 rounded-lg bg-white  dark:bg-neutral-700 md:max-w-48 md:flex-row">
  <Image
    className=" h-28 md:h-24 w-full md:w-48 rounded-t-lg object-cover md:rounded-xl md:rounded-l-lg"
    src="/home.jpg"
    alt=""
    height={96}
    style={{
      objectFit: 'cover'
    }}
    width={192}
  />
  <div className="flex flex-col justify-start mt-2 md:mt-0 md:ml-4">
    <h5 className="ml-4 mt-2 mb-2 text-lg font-semibold text-neutral-800 dark:text-neutral-50">
      {title}
    </h5>
    <p className="mb-4 ml-4 pr-2 text-sm text-neutral-600 dark:text-neutral-200">
      {content}
    </p>
  </div>
</div>

    );
  };

  export default Card
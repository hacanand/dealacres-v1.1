
import NavigationBroker from '@/components/propertyListing/Navigation/NavigationBroker';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {

  return (
    <section className='mt-12 container mx-auto lg:w-4/5'>
    
    <NavigationBroker />
 
     <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-20 container mx-auto my-10 overflow-auto'>
     
     <div className='h-full w-[400px] rounded-xl bg-[#c9e2f3] p-4 flex flex-col items-center'>
         
             <h1 className="text-xl text-center mt-20">
             An Accurate Location is the most essential as it helps you to connect the perfect buyer or tenant</h1>
        
         <Image src={'/propertyListing/assets/location.png'} alt='location' height={150} width={150} className='my-20' /> 
         <h1 className='font-bold text-xl'>Need Help?</h1>
         <p className='text-lg'>You Can Email Us</p>
         <p className='text-lg text-blue-600 mb-20'>Contact@dealacres.com</p>
     </div>
     <div className='h-full md:w-[400px] md:mt-20 rounded-xl p-5 border-t-4 border-r-2 border-l-2 border-[#dcf0fd] border-b-4'>
         <h1 className="font-medium md:font-bold md:text-2xl text-xl  my-2">
         Your Property Location?</h1>
         <input placeholder='State' type='text' className='py-4 px-2 rounded-lg w-full mb-2 border-t-4 border-r-2 border-l-2 border-[#c7deee] border-b-4'/>
         <input placeholder='City' type='text' className='py-4 px-2 rounded-lg w-full mb-2 border-t-4 border-r-2 border-l-2 border-[#c7deee] border-b-4'/>
         <input placeholder='Name of Project/Property' type='text' className='py-4 px-2 rounded-lg w-full mb-2 border-t-4 border-r-2 border-l-2 border-[#c7deee] border-b-4'/>
         <input placeholder='Area/Sector' type='text' className='py-4 px-2 rounded-lg w-full mb-2 border-t-4 border-r-2 border-l-2 border-[#c7deee] border-b-4'/>
         <input placeholder='House No. (optional)' type='text' className='py-4 px-2 rounded-lg w-full mb-2 border-t-4 border-r-2 border-l-2 border-[#c7deee] border-b-4'/>
         
         <Link href={'property-profile'}>
         <button className='w-full bg-blue-600 rounded-md px-8 py-3 font-bold text-white my-3 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600'>Continue</button>
         
         </Link>
     </div>
 </div>
 </section>
  );
};

export default Page;

import React from 'react'

const BookingCard = () => {

const services = [
  {
    id: 1,
    name: "Haircut at Home",
    provider: "UrbanCuts",
    price: 399,
    image: "https://images.squarespace-cdn.com/content/v1/6270536f27fa2a2db87d05c3/b41eaa68-0199-4e96-887e-ff1d15da0de6/Comb-Over-Taper-Fade-e1536810477954.jpg"
  },
  {
    id: 2,
    name: "Full Home Cleaning",
    provider: "CleanPro",
    price: 999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIkmNRGT7zTeTojS7lptw5wZV4M37NDpb9g&s"
  },
  {
    id: 3,
    name: "Relaxing Body Massage",
    provider: "BodyBliss",
    price: 1299,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytC6Clj67IWYYYSi9WG9MlPVue8zAXpJiNQ&s"
  },
  {
    id: 4,
    name: "AC Repair Service",
    provider: "CoolFix",
    price: 499,
    image: "https://content.jdmagicbox.com/comp/noida/l5/011pxx11.xx11.200527154531.d3l5/catalogue/j-s-m-cool-center-noida-sector-22-noida-ac-repair-and-services-1zoivikb8y.jpg"
  },{
    id: 2,
    name: "Full Home Cleaning",
    provider: "CleanPro",
    price: 999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIkmNRGT7zTeTojS7lptw5wZV4M37NDpb9g&s"
  },{
    id: 1,
    name: "Haircut at Home",
    provider: "UrbanCuts",
    price: 399,
    image: "https://images.squarespace-cdn.com/content/v1/6270536f27fa2a2db87d05c3/b41eaa68-0199-4e96-887e-ff1d15da0de6/Comb-Over-Taper-Fade-e1536810477954.jpg"
  }
];


  return (
    <div className='cards container mx-auto py-5 flex flex-wrap gap-10 lg:justify-start justify-center'>

            {
                services.map((elm) => {
                    return(<>
                    <div key={elm.id} className="card w-80 h-80 bg-gray-200 rounded-xl">
                <img className='w-full h-48 object-cover rounded-2xl cursor-pointer transition-all hover:scale-105 duration-500' src={elm.image} alt="haircut " />
                <div>
                 <div className='flex flex-col'>
                    <span className='text-xl font-bold ml-5 mt-1'>{elm.name}</span>
                    <span className='text-lg text-gray-600 ml-5'>{elm.provider}</span>
                 </div>
                 
                    <div className='flex items-center justify-between mt-3 px-3'>
                        <p className='text-lg font-bold text-green-500'>₹{elm.price}</p>
                        <button className='bg-blue-500 text-white font-bold p-2 rounded-md cursor-pointer hover:bg-blue-400 duration-700 hover:scale-105'>Book Now</button>
                    </div>
                </div>
            </div>
                    </>)
                })
            }

        </div>
  )
}

export default BookingCard

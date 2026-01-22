import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs"
import HeroImage from "../assets/hero.jpg"


export default function Hero() {
  return (
   <section className="flex bg-gray-800 justify-around items-center p-10 text-white lg:flex-row md:flex-col flex-col xs:flex-col space-y-10 space-x-10" >
    <div className="lg:w-1/3 w-fit">
        <p className="text-4xl mb-5 text-slate-300">I'm</p>
        <h1 className="text-6xl">Agrim</h1>
        <hr />
        <p className="mt-10 text-xl test-slate-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam a impedit ad molestiae blanditiis, quam temporibus? Nisi unde consectetur eius officiis corporis iusto accusantium illo. Earum cumque perspiciatis animi quis.
        </p>
    </div>
    <div className="lg:w-1/3 items-center w-fit">
        <img src={HeroImage} alt="" width={500} height={500}  className="rounded-full  border-6 border-wheat-500"/>

    </div>
    <div className="lg:w-1/3 w-fit space-y-5">
        <p className="mb-4 ml-4 text-4xl">About Me</p>
        <p className="text-xl ml-4 text-slate-300">
            Let's Build Quality In Programming Ad Design With Out Services.
        </p>
        <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full ml-4 hover:scale-105 transition-transform">
            Show More...
        </button>
         <div className="flex justify-around mt-10  space-x-1 ">
        <BsFacebook size={30} className=" md:mx-2 cursor-pointer md:hover:text-blue-600 "/>
        <BsTwitter size={30} className="md:mx-2 hover:text-blue-400 cursor-pointer "/>
        <BsInstagram size={30} className="md:mx-2 hover:text-pink-600 cursor-pointer"/>
        <BsLinkedin size={30} className="md:mx-2 hover:text-blue-700 cursor-pointer"/>
        <BsTiktok size={30} className="lg:mx-2 hover:text-black cursor-pointer"/> 
    </div>
    </div>
   
   </section>
  )
}

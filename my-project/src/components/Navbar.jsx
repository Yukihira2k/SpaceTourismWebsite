import logo from "../Images/shared/logo.svg";
import {useState} from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  

function Navbar(){
const navLinks =[
    {
        title:"HOME",
        link:"/Home"
    },
    {
        title:"DESTINATION",
        link:"/Destination"
    },
    {
        title:"CREW",
        link:"/Crew"
    },
    {
        title:"TECHNOLOGY",
        link:"/Technology"
    },
]

const [open,setOpen]=useState(false)

function handleMenu(){
    setOpen((prev)=>!prev);
}
    return(
        <>  
        <div className="pt-10">
            <div className="flex justify-around items-center m-auto backdrop-blur-[10px] bg-[#fffffff33]  ">
                <img src={logo} className="m-auto md:m-10 max-md:absolute max-md:left-10 max-md:top-10"/>
                <ul className=" gap-auto cursor-pointer hidden  md:flex">
                   {navLinks.map((link,index) => (
                  <li key={index}href={link.link} className="text-white hover:border-b-2 p-10">{link.title}</li>
                   ))}
                </ul>

                    {/* Hamburger link */}
                
                    <ul className={` top-20 absolute  pt-10 gap-auto cursor-pointer   ${open ? "block text-center w-96 rounded-3xl  bg-gray-900 border-2 gray"  :"hidden top-[-490px]"} md:hidden`}>
                   {navLinks.map((link,index) => (
                  <li key={index}href={link.link} className="text-white hover:border-b-2 p-10">{link.title}</li>
                   ))}
                </ul>
                <div className="mr-2 flex block absolute right-10 top-3 md:hidden">
                    <button onClick={handleMenu} className="text-white m-10">
                        {open? <CloseIcon/> : <MenuIcon/>}
                    </button>
                </div>

           



            </div>

        </div>


      

        </>
    )
}

export default Navbar;
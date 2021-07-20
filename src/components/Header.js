import { IconButton } from "@material-ui/core";
import {  GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoIosNotifications } from 'react-icons/io';
import { MdApps } from 'react-icons/md';


function Header() {
    return (
        <>
        <header className="flex items-center justify-between shadow   ">
            <div className="flex items-center">
                <IconButton>
                    <GiHamburgerMenu/> 
                </IconButton>
                <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"  className="object-contain h-16" alt=""/>
            </div>

            <div  className="bg-whitesmoke items-center p-3 flex w-1/2 rounded-lg  cursor-pointer ">
                <BiSearchAlt2 className=""/>
                    <input type="text" placeholder="Search Mail" className=" pl-2 cursor-pointer flex-grow focus:outline-none bg-whitesmoke " />
                <IoMdArrowDropdown className=""/> 
                
            </div>
            <div className="flex space-x-3 pr-2 text-">
            <IconButton>              
            <MdApps/> 
                    </IconButton>
                    <IconButton>
                    
                <IoIosNotifications/>
                </IconButton>
                <img src="https://scontent.flhr10-2.fna.fbcdn.net/v/t1.6435-1/p480x480/38781010_2579432842082139_3002868557282279424_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=1vej41DKwnkAX-LpQRH&_nc_ht=scontent.flhr10-2.fna&oh=ffc154e7dc020e10265a7f32389807af&oe=60F9C1CA"  className="h-10 rounded-full cursor-pointer" />

            </div>


        </header>
            
        </>
    )
}

export default Header

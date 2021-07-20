
import { RiAddCircleFill } from 'react-icons/ri';
import { MdInbox } from 'react-icons/md';
import { BiStar } from 'react-icons/bi';
import { BiTimeFive } from 'react-icons/bi';
import { BiLabel } from 'react-icons/bi';
import { BiSend } from 'react-icons/bi';
import { MdDrafts} from 'react-icons/md';
import { BsFillPersonFill} from 'react-icons/bs';
import { BsCameraVideoFill} from 'react-icons/bs';
import { AiFillPhone} from 'react-icons/ai';
import { MdArrowDropDown} from 'react-icons/md';
import SidebarOption from './SidebarOption';
import { IconButton } from "@material-ui/core";


function Sidebar() {
    return (
        <>
        <div className="flex flex-col pl-3 pt-6">
            <div>
            <button className="border shadow-md rounded-full p-4 transform hover:scale-105 delay-75"><RiAddCircleFill className="text-2xl text-gray-400"/></button> </div>  
       <SidebarOption Icon={MdInbox} title="Inbox" number={54}/>
       <SidebarOption Icon={BiStar} title="Starred" number={82}/>
       <SidebarOption Icon={BiTimeFive} title="Snoozed" number={12}/>
       <SidebarOption Icon={BiLabel} title="Important" number={4}/>
       <SidebarOption Icon={BiSend} title="Sent" number={80}/>
       <SidebarOption Icon={MdDrafts} title="Drafts" number={0}/>
       <SidebarOption Icon={MdArrowDropDown} title="More" />
       <div>
           <div>

<IconButton>
<BsFillPersonFill/> 
</IconButton>
<IconButton>
<BsCameraVideoFill/> 
</IconButton>
<IconButton>
<AiFillPhone/> 
</IconButton>


               

           </div>
       </div>
       
        </div>
            
        </>
    )
}

export default Sidebar

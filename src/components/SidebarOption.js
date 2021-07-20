function SidebarOption({Icon, title, number}) {
    return (
        <>
        <div className="flex items-center h-10 cursor-pointer group  transition delay-75 rounded-lg hover:bg-hoverred group ">
            <Icon className="icons redhovering"/> 
            <h3 className="flex-grow-1 ml-2 text-base font-normal hover:font-bold redhovering">{title}</h3>
            <p className="opacity-0 group-hover:opacity-100 transition delay-75 ml-auto pr-2 font-semibold redhovering">{number}</p>

        </div>

            
        </>
    )
}

export default SidebarOption

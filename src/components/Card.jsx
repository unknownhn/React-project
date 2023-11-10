export const Cardb=({img,icon1,icon2})=>{
    return (
        <>
        <div className="w-[30%] md:w-[100%] my-[20px] border-[1px] rounded-[15px] shadow-lg mb-[20px] dark:text-white">
            <img src={img} alt="" className="m-auto w-[100%]"  />
          <div className=" p-[15px]">  
            <h1 className="text-[20px] my-[4px] font-semibold">Project Tile goes here</h1>
            <p>This is sample project description random things 
            are here in description This is sample project lorem ipsum generator for dummy content</p>
            <h1 className="my-[10px]">Tech stack : HTML , JavaScript, SASS, React</h1>
            <div className="my-[8px] flex items-center justify-between">
                <div className="flex justify-between items-center gap-[10px]">
                    <img src={icon1} alt="" />
                    <span>Live Preview</span>
                </div>
                <div className="flex justify-between items-center gap-[10px]">
                    <img src={icon2} alt="" />
                    <span>View Code</span>

                </div>
            </div></div>
        </div>
        </>
    )
}
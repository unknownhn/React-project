export const Icon=({img,name})=>{
    return (
        <>
         <div className='w-[20%] md:w-[100%] text-center dark:text-white p-[15px] border-[1px] shadow-md rounded-[16px]'>
        <img src={img} alt="" className='m-auto' />
        <h1 className='text-[16px] font-semibold'>{name}</h1>
      </div>
        </>
    )
}
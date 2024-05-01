

export const BuddiesUI = () => {
  return (
    <div className="w-full h-screen after:content-[''] 
    after:absolute 
    after:w-full 
    after:h-full
    after:bg-[url('../src/assets/images/PearlMap.png')] 
    after:bg-cover 
    after:bg-no-repeat 
    after:bg-center
    after:top-0
    after:left-0
    after:brightness-[0.15]
    "
    >
        <div className='flex flex-col justify-center w-full h-full p-4 py-10 relative items-center text-ValoYellow z-10 bg-black'>
            Z-INDEX IS THE KEY!
        </div>
    </div>
  )
}


function MainPage(){
    return(
        <>
        <div className="flex items-center justify-around mt-64 text-white max-lg:flex-col max-lg:mt-10 max-sm:mt-22 ">
            <div className="flex-col w-1/4 max-lg:w-1/2 max-lg:text-center max-sm:w-full">
                <h2 className="text-3xl text-slate-300 max-lg:text-center max-lg:text-base max-md:mt-44">SO, YOU WANT TO TRAVEL TO</h2>
                <h1 className="text-9xl max-lg:mb-5 max-md:text:2xl ">SPACE</h1>
                <p className="text-lg pt-5 text-justify text-slate-400 max-lg:text-base max-lg:text-center max-lg:mb-32 max-sm:m-10">Let's face it: if you want to go to space you might as well
                    genuinely go to outer space and not hover kind of on the 
                    edge of it. Well sit back and relax because we'll give you 
                    a truly out of this world experience!
                </p>
            </div>

            <div>
                <button className="w-60 h-60 mb-32 text-3xl rounded-full border-2  flex justify-center items-center bg-white text-black hover:scale-110 transform-all duration-500 ">Explore</button>
            </div>
            
        </div>

        </>
    )
}

export default MainPage;
import { useNavigate } from "react-router-dom"
const Body=()=>{
    const navigate=useNavigate();
    const handleexplore=()=>{
        navigate('/shop')
    }
    return(
        <div className="flex flex-row  h-[70vh] w-full px-20 bg-slate-100">
            <div className="flex-1 h-full w-[50%]" style={{backgroundImage: 'url(./image10.webp)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%', maxHeight: '100%'}}></div>
            <div className="flex flex-col  h-full w-[50%] pl-20 pt-14">
                <span className="text-6xl font-bold">Find Your Favorite</span>
                <span className="text-6xl font-bold pt-4 text-blue-800">Book Here!</span>
                <span className="pt-4">Are you looking for your next captivating read? Look no further! Dive into our collection of handpicked favorite books that are sure to captivate your imagination and leave you spellbound.

From timeless classics to gripping thrillers, heartwarming romances to mind-bending mysteries, </span>
<button onClick={handleexplore} className="bg-blue-700 rounded-md h-10 w-32 font-semibold text-white mt-4">Explore Now</button>
            </div>
        </div>
    )
}
export default Body;
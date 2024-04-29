import { useNavigate } from "react-router-dom";
const National=()=>{
    const navigate=useNavigate();
    const handleexplore=()=>{
        navigate('/shop')
    }
    return(
        <div className="h-[70vh] w-full">
            
            <div className="px-10 flex bg-customGreen h-[100%]">
                <div className="flex flex-col justify-center ">
                    <span className="text-4xl font-bold">2023 National Book Awards for Fiction</span>
                    <span className="text-4xl font-bold">shortlist</span>
                    <button onClick={handleexplore} className="bg-blue-700 rounded-md h-10 w-32 font-semibold text-white mt-4">Explore Now</button>
                </div>
                <div className="flex-1" style={{backgroundImage: 'url(./image3.jpg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%', maxHeight: '100%'}}></div>
            </div>
        </div>
    )
}
export default National;
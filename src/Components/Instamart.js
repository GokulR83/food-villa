import { instamart_img_URL } from "../config";
import useInstamart from "../utils/useInstamart"
import Loading from "../Components/Loading";

const Instamart = () =>{
    const data = useInstamart();
    if(!data) return null;
    return(
        <div className='flex flex-row flex-wrap align-center justify-center gap-6'>
            {
                data.map((data)=>(
                    <div key={data.nodeId} className='data-card'>
                        <img src={instamart_img_URL + data.imageId} alt={data.displayName}/>
                        <h2 className="font-bold text-center">{data.displayName}</h2>
                    </div>
                
                ))
            }
        </div>
    )
}

export default Instamart;
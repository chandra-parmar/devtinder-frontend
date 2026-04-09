import { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from "../utils/slices/connectionSlice"



function Connections(){

    //hooks
     const connections = useSelector((store) => store.connections)
     const dispatch = useDispatch()
    
    //api call
    const fetchConnections = async() =>{

        try{
            
            const res = await axios.get('http://localhost:5001/api/user/connections',{
                withCredentials : true
            })

           console.log(res.data.data)
           //store conncetions data in store 
           dispatch(addConnections(res.data.data))

        }catch(err)
        {
           
        }
    }

     useEffect(()=>{
        fetchConnections()
     },[])

     //if there is no connections
     if(!connections) return

     if(connections.length === 0)
     {
        return <h1>No connection found</h1>
     }

    return(

        <div>
            <h1 className="text-4xl font-bold">Connections</h1>

             {
                connections.map((connection)=>{
                    const { firstName, lastName, photoUrl, age, gender, about} = connection

                    return(
                       
                        <div className="card card-side w-1/2 bg-base-100 shadow-sm mt-4">

                            <figure>
                                <img
                                src={photoUrl}
                                alt="photo" />
                            </figure>

                            <div className="card-body mx-4">
                                <h2 className="card-title text-xl font-bold">{firstName + " "+lastName}</h2>
                                   {
                                     age && gender && <p>{age +" "+gender}</p>
                                   }
                                <p>{about}</p>
                                
                            </div>

                         </div>
                    )
                })
             }
        </div>
    )
}

export default Connections
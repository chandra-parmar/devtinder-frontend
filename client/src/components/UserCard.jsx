

function Card({ user }) {
    if (!user) {
        return null
    }

    const { firstName, lastName, age, photoUrl, gender, about } = user

    return(
        
            <div className="bg-base-300 w-70 shadow-xl rounded-xl">

                <figure className="rounded-xl object-fill">
                    <img
                    className="rounded-t-lg  w-full h-75 object-cover"
                    src={ photoUrl }
                    alt="Shoes" />
                </figure>

                <div className="card-body">

                    <h2 className="card-title">{firstName +" "+lastName}</h2>
                    
                    { age && gender && <p>{age + " "+ gender}</p> }
                    <p>{ about }</p>

                    <div className="card-actions justify-center my-4">

                       <button className="btn btn-primary">Ignore</button>
                       <button className="btn btn-primary">Interested</button>

                    </div>
                </div>
           </div>
        
    )
}

export default Card
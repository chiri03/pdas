function ProfileCard({title, handle, image, description}) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt= "digital assistant logo" />
                </figure>   
            </div>

            <dic className="card-conctent">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="conctent">{description}</div>
            </dic>
        </div>
    );
}

export default ProfileCard;
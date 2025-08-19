import css from "./Profile.module.css"

const Profile = ({name, tag, location, image, stats}) => {
    return(
        <div className={css.container}>
            <div className={css.items}>
                <img className={css.image}
                src={image}
                height={150}
                width={150}
                alt="User avatar"
                />
                <p className={css.name}>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            <div/>
            
            </div>
            <ul className={css.list}>
                    <li className={css.listItems}>
                        <span>Followers</span> <br />
                        <span>{stats.followers}</span>
                    </li>
                    <li className={css.listItems}>
                        <span>Views</span> <br />
                        <span>{stats.views}</span>
                    </li>
                    <li className={css.listItems}>
                        <span>Likes</span> <br />
                        <span>{stats.likes}</span>
                    </li>
            </ul>
            
        </div>
    )
}

export default Profile;
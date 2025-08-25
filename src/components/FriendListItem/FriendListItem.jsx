import css from "./FriendListItem.module.css"

const FriendListItem = ({avatar, name, isOnline}) => {
    return(
        <>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            {
                isOnline ? <p style={{color:"green"}}>Online</p> : <p style={{color:"red"}}>Offline</p>
            };
        </>

    )
}

export default FriendListItem;
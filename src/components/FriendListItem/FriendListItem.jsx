import css from "./FriendListItem.module.css"

const FriendListItem = ({friend}) => {
    {console.log("hi")}
    return(
        <>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
            {
                friend.isOnline ? <p style={{color:"green"}}>Online</p> : <p style={{color:"red"}}>Offline</p>
            };
        </>

    )
}

export default FriendListItem;
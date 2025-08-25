import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
    return(
        <div >
            <ul className={css.list}>
                {friends.map(friendData => (
                        <li className={css.profileCard} key={friendData.id}>
                            <FriendListItem avatar={friendData.avatar} name={friendData.name} isOnline={friendData.isOnline}/>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default FriendList
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
    return(
        <div >
            <ul className={css.list}>
                {friends.map(friendData => (
                        <li className={css.profileCard} key={friendData.id}>
                            <FriendListItem friend={friendData}/>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default FriendList
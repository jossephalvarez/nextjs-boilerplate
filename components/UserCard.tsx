import Link from "next/link";
import {UserCardProps} from "@/types/User";

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <div className="user-card">
            <h3>{user.name}</h3>
            <Link href={`/users/${user.id}`}>Ver detalles</Link>
        </div>
    );
};

export default UserCard;
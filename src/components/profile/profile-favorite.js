import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import favoriteService from "../../services/favorite-service";

const ProfileFavorite = ({user, editable}) => {

    const {uid} = useParams();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if(editable) {
            favoriteService.findFavoritesByUserId(user._id)
                .then(res => setFavorites(res));
        } else if(uid) {
            favoriteService.findFavoritesByUserId(uid)
                .then(res => setFavorites(res));
        }
    }, [])

    return (
        <div className="favorite-block">
            <h3>Favorite</h3>
            <ul className='list-group'>
                {favorites.map(favorite =>
                    <li className="favorite-list-item" key={favorite._id}>
                        <Link to={`/details/${favorite.recipeId}`}>
                            <img src={favorite.recipeImg}
                                 width={120}/>
                                 <br/>
                            {favorite.recipeName}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ProfileFavorite;
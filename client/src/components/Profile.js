import React from 'react';
import { useParams } from 'react-router-dom';

// import SavedRecipes from '../pages/SavedRecipes';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import { SAVE_RECIPE, REMOVE_RECIPE } from '../utils/mutations';
import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();
 
//   const [saveRecipe] = useMutation(SAVE_RECIPE);
  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

//   redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    
    return user.username;
  }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  console.log(user.username);

//   const handleClick = async () => {
//     try {
//       await saveRecipe({
//         variables: { id: user._id },
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   };

  return (
    <div>
      <div >
        <h2>
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        {/* {userParam && (
          <button onClick={handleClick}>
            Save Recipe
          </button>
        )} */}
      </div>

      {/* <div className="flex-row justify-space-between mb-3">

        <div className="col-12 col-lg-3 mb-3">
          <SavedRecipes
            username={user.username}
            recipeCount={user.recipeCount}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
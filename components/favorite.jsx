// function FavoriteButton(props) {

//     console.log(props)

//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const loggedInUser = localStorage.getItem('user');
//         if (loggedInUser) {
//             setUser(JSON.parse(loggedInUser));
//         }
//     }, []);

//     console.log("This is the user saved in local storage:", user)

//     // IF USER IS NOT IN LOCAL STORAGE, ASKED TO LOG IN INSTEAD
//     if (user === null) {
//         return (
//             <p className={styles['text_small']}><span>
//                 <a href="/login">Log in to favorite this recipe!</a>
//             </span></p>);
//     }
//     // return <FindInitialState userId={user.user_id} recipeId={props.recipeId}/>
// }

const favoriteButton = () => {
    // define the state
    const [favState, setFavState] = useState(false)

    toggleFavorite = () => {
        if (favState === false) {
            setFavState(true);
            // change favorite button to shaded version
            return
        }   
        // what else would it need to do?
    }
}
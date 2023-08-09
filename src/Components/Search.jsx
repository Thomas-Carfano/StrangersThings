import {useState} from 'react'
import "../App.css"

// eslint-disable-next-line react/prop-types
const Search = ({Posts, setPosts}) => {
    console.log('Search Test')
    const [storeUserInput, setStoreUserInput] = useState([]);

const searchHandler = (e) => {
    e.preventDefault();

const userInput = e.target[0].value
console.log("user input " + userInput)

const compare = () => {
    const filteredPosts = [];

    for(let i = 0; i < userInput.length; i++) {
        storeUserInput.push(userInput[i])
        setStoreUserInput(storeUserInput)
    
    
        // eslint-disable-next-line react/prop-types
        for(let j = 0; j < Posts.length; j++){
        
            // eslint-disable-next-line react/prop-types
            let loopNames = Posts[j].title
            let post = Posts[j]

            // eslint-disable-next-line react/prop-types
            for(let k = 0; k < loopNames.length; k++){
            

                if(userInput[i] === loopNames[k]){
                
                    // arr.push(floofs)
                    console.log(post)
                    filteredPosts.push(post)
        
                    continue;
                }
            }
        }
    }

    setPosts(filteredPosts)
}
compare()

}

return (
    <>
    <div>
    <h1>Search Floofs</h1>
    <form onSubmit={searchHandler}>
    <label>Search:<input type="text"></input></label>
    <br/>
    <label ><input type="submit" id='sub'></input></label>
    </form>
    </div>
    </>
)}; 

export default Search
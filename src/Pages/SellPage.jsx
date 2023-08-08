import { useNavigate } from "react-router-dom";
const BASE_URL = `https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf`


const SellItem = ({tokenResponse}) => {
    console.log("sell")
    const token = tokenResponse
    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault()
        console.log("yee")
        console.log(e)
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)
        console.log(e.target[3].value)
        console.log(e.target[4].value)
        console.log(token)

        const createPost = async () => {
            try{
                const requestOptions = {
                method: 'POST',
                headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ 
                    post:{
                    title: event.target[0].value,
                    description: event.target[1].value,
                    price: event.target[2].value,
                    location: event.target[3].value,
                    willDeliver: event.target[4].value,
                    }
                })
            };
            const response = await fetch(`${BASE_URL}/posts`, requestOptions);
            const data = await response.json();
            console.log(data)
            if(data.error.message != undefined ){
                navigate('/SignIn')
            } else {
                console.log("working")
            }
        } catch (error) {
            console.log(error.error.message)
        }
            
        }
        createPost()
    }
    

    return (
        <>
        <form onSubmit={submitHandler}>
            <h1>Create a New Post</h1>
            <label>Title:<input type="text" required></input></label>
            <br/>
            <label>Price:<input type="number" required></input></label>
            <br/>
            <label>Desscription:<input type="text" required></input></label>
            <br/>
            <label>Location:<input type="text" ></input></label>
            <br/>
            <p>Delivery?</p>
            <label> 
                <select name="cars" id="cars">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </label><br/>
            <br/>
            <br/>
            <label><input type="submit" value="Submit New Product"></input></label><br/>
        </form>
        </>
    )
};

export default SellItem
import {useEffect, useState} from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "../App.css"

const BASE_URL = `https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf`

const Posts = () => {
    const [Posts, setPosts] = useState([]);
    console.log("Posts");

    useEffect(() => {
        try{
            console.log("UseTest")
            const getPosts = async () => {
                const fetchPosts = await fetch(`${BASE_URL}/posts`);
                const data = await fetchPosts.json();
                const Posts = data.data.posts
                setPosts(Posts)
                console.log(Posts)
            }
            getPosts()
            } catch (error) {
            console.log(error)
        }
    }, []);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Posts.map((index) => (
          <Grid item xs={2} sm={4} md={4} key={index.length}>
            <a href={index.id}>
                <Item id={index}>
                    <b>{index.title}</b>
                    <br/>
                    Price: {index.price}
                    <br/>
                    Description: {index.description}
                    <br/>
                </Item>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
        </>
    )
};
export default Posts
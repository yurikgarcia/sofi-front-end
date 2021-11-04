// import React, {useState, useEffect } from 'react';
import React from 'react';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

import '../App.css';
  




function Orders ({match}) {
 


        return (
          <article>

        

          <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>

             <Link to="/orders/:name"style={{ textDecoration: 'none'}}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="NIGHTS WATCH"
              />
              <CardMedia
                component="img"
                height="194"
                image= "https://tinyurl.com/2t5zpsp9" alt="Logo"
                alt="Sorry you cant see our badass Pokemon"
              />
            </Card>
            </Link>

            <Link to="/orders/:name"style={{ textDecoration: 'none'}}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="NIGHTS WATCH"
              />
              <CardMedia
                component="img"
                height="194"
                image= "https://tinyurl.com/2t5zpsp9" alt="Logo"
                alt="Sorry you cant see our badass Pokemon"
              />
            </Card>
            </Link>

            <Link to="/orders/:name"style={{ textDecoration: 'none'}}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="NIGHTS WATCH"
              />
              <CardMedia
                component="img"
                height="194"
                image= "https://tinyurl.com/2t5zpsp9" alt="Logo"
                alt="Sorry you cant see our badass Pokemon"
              />
            </Card>
            </Link>

            <Link to="/orders/:name"style={{ textDecoration: 'none'}}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="NIGHTS WATCH"
              />
              <CardMedia
                component="img"
                height="194"
                image= "https://tinyurl.com/2t5zpsp9" alt="Logo"
                alt="Sorry you cant see our badass Pokemon"
              />
            </Card>
            </Link>      

          </Box>

  

          <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>

            <Link to="/orders/:name"style={{ textDecoration: 'none'}}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="NIGHTS WATCH"
              />
              <CardMedia
                component="img"
                height="194"
                image= "https://tinyurl.com/2t5zpsp9" alt="Logo"
                alt="Sorry you cant see our badass Pokemon"
              />
            </Card>
            </Link>   

                        <Link to="/orders/:name"style={{ textDecoration: 'none'}}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="NIGHTS WATCH"
              />
              <CardMedia
                component="img"
                height="194"
                image= "https://tinyurl.com/2t5zpsp9" alt="Logo"
                alt="Sorry you cant see our badass Pokemon"
              />
            </Card>
            </Link> 

            <Link to="/orders/:name"style={{ textDecoration: 'none'}}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  title="NIGHTS WATCH"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image= "https://tinyurl.com/2t5zpsp9" alt="Logo"
                  alt="Sorry you cant see our badass Pokemon"
                />
              </Card>
            </Link> 

            <Link to="/orders/:name"style={{ textDecoration: 'none'}}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  title="NIGHTS WATCH"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image= "https://tinyurl.com/2t5zpsp9" alt="Logo"
                  alt="Sorry you cant see our badass Pokemon"
                />
              </Card>
            </Link>   
          </Box>
        
            </article>


            
        
        
    
          );
        }
      
export default Orders;
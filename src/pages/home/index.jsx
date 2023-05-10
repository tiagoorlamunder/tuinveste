import React from 'react'
import './styles.css'
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { url } from '../../global';
import DropdownMenu from '../../components/Header/Header';

const Home = () => {
    return (
      <>
        <DropdownMenu></DropdownMenu>
      </>
    );
  }
  
  export default Home;
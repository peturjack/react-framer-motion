import styled from "styled-components";
import { motion } from "framer-motion"



export const Container = styled(motion.div)`
height: 100px;
width: 100px;
background-color: white;
border-radius: 20px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

`

export const MainPage = styled.main`
height: 100dvh;
background: linear-gradient(180deg, blue, red);
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

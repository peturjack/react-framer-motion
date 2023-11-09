
import { Container } from "./styled/container"
import { MainPage } from "./styled/container"


function App() {
  return(
    <>
    <MainPage>
    <Container drag dragConstraints={{top:0, right: 0, bottom: 0, left: 0,}} whileHover={{scale: 1.2, rotate: 45,  transition: {duration: 0.5, ease: "easeInOut"} }}>
      <h2>Drag</h2>
    </Container>
    </MainPage>
    </>
  )
}


export default App



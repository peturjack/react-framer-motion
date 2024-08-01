import { Container, Sunlogo, MainPage } from "./styled/container";
import sun1 from "./images/sungod.svg";

function App() {
  return (
    <>
      <MainPage>
        <Sunlogo
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          src={sun1}
        ></Sunlogo>
        <Container
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
          whileHover={{
            scale: 1.2,
            rotate: 45,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          <h2>Drag</h2>
        </Container>
      </MainPage>
    </>
  );
}

export default App;

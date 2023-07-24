import { Button, DarkButton, PinkButton } from "./components/Button.styled";
import Flex from "./components/Flex";
import StyledLink from "./components/Links";
import Title from "./components/Title";

const App = () => {
  return (
    <>
    <Flex>
      <StyledLink href="https://www.clarusway.com" target="_blank" >Clarusway</StyledLink>
      <StyledLink react href="https://www.react.dev" target="_blank" >React</StyledLink>
    </Flex>
      <Flex bg="#bebe">
        <Title renk="white" bgRenk="red">
          Styled Component
        </Title>
        <Button>Tikla</Button>
        <DarkButton>Send</DarkButton>
      </Flex>
      <Title renk="purple">FlexBox</Title>
      <Title bgRenk="green">Flexbox</Title>
      <Flex bg="tomato">
        <h1>PROPS</h1>
      </Flex>
      <Flex>
        <PinkButton>Dolgulu</PinkButton>
        <PinkButton primary>Dolgusuz</PinkButton>
      </Flex>
    </>
  );
};

export default App;

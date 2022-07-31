import { Appear, Paragraph } from "arwes";

const Entery = (props) => {
  return (
    <Appear id="entery" animate show={props.entered}>
      <Paragraph>Hey</Paragraph>
      <Paragraph>Welcome</Paragraph>
    </Appear>
  );
};

export default Entery;

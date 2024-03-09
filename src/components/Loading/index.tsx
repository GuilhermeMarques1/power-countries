import FadeLoader from "react-spinners/FadeLoader";
import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <FadeLoader />
    </Container>
  );
}
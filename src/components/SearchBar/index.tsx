import { Container, Input } from "./styles";
import { RiSearchLine } from "react-icons/ri";

export function SearchBar() {
  return (
    <Container>
      <Input placeholder="Busque pelo país" />
      <RiSearchLine size={18} color="#fff"/>
    </Container>
  );
}

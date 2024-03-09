import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <Container 
      onClick={() => navigate(-1)}
    >
      <IoChevronBackSharp />
      Voltar
    </Container>
  );
}

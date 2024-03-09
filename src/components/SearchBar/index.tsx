import { Container, Input } from "./styles";
import { useSearch } from "../../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";

export function SearchBar() {
  const navigate = useNavigate();
  const { search, setSearch } = useSearch();

  function handleClickEnter(event: any) {
    if(event.key === 'Enter') {
      navigate('/')
    }
  }

  return (
    <Container>
      <Input 
        placeholder="Busque pelo país"
        value={search} 
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={handleClickEnter}
      />
      <RiSearchLine size={18} color="#fff"/>
    </Container>
  );
}

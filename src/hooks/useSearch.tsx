import { createContext, ReactNode, useContext, useState } from 'react';

interface searchProviderProps {
  children: ReactNode;
}

interface searchContextData {
  search: string;
  setSearch: (value: string) => void;
}

const SearchContext = createContext<searchContextData>({} as searchContextData);

export function SearchProvider({ children }: searchProviderProps) {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      { children }
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  return context;
}

import  { createContext, useContext, useState, ReactNode } from "react";
import { Question } from "../entities/Question";

interface FilterContextType {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  results: Question[];
  setResults: (data: Question[]) => void;    
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFilter, setSelectedFilter] = useState("hot");
  const [results, setResults] = useState<Question[]>([]);

  return (
    <FilterContext.Provider
      value={{ selectedFilter, setSelectedFilter, results, setResults }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};

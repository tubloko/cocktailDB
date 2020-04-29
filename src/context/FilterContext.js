import { useContext, createContext } from "react";

export const FilterContext = createContext({
    filter: {},
    setFilter: () => {},
});

export const useFilterContext = () => {
    const { filter, setFilter } = useContext(FilterContext);

    return { filter, setFilter };
};



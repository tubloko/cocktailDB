import React, {useState, useEffect} from "react";

import Button from "../Button";
import Checkbox from "../Checkbox";
import Spinner from "../Spinner";

import {useFilterContext} from "../../context/FilterContext";
import API from "../../API";

import './Filter.css';

const Filter = () => {
    const api = new API();
    const { setFilter } = useFilterContext();
    const [filters, setFilters] = useState({});
    const [selected, setSelected] = useState({});

    useEffect(() => {
        const getAllFilters = async () => {
            const response = await api.getAllFilters();
            setFilters(response);
            setFilter(response);
        };
        getAllFilters();
    }, []);

    const handleChange = (event) => {
        setSelected({...selected, [event.target.value] : event.target.checked });
    };

    const handleClick = () =>  {
        const currentFilter = Object.entries(selected).filter(a => a[1]).map(a => a[0]);
        setFilter({drinks: currentFilter.length ? filters.drinks.filter(({strCategory}) => {
            return currentFilter.includes(strCategory);
            }) : filters.drinks});
    };

    if (!filters.drinks) {
        return (
            <div className='text-center mt-5 ml-4'>
                <Spinner />
            </div>
        );
    }
    return (
        <>
            <ul className='list-group ml-4'>
                {
                    filters.drinks.map(({strCategory}) => {
                        return (
                            <li key={strCategory} className='pt-2 pb-2 list-group-item'>
                                <Checkbox
                                    type="checkbox"
                                    value={strCategory}
                                    checked={selected[strCategory]}
                                    onChange={handleChange}
                                    view='ml-3' />
                                <span>{strCategory}</span>
                            </li>
                        );
                    })
                }
            </ul>
            <Button onClick={handleClick}>Apply</Button>
        </>
    );
};

export default Filter;

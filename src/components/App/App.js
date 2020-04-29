import React, { useState } from "react";

import Header from "../Header";
import CocktailList from "../CocktailList";
import Filter from "../Filter";
import {FilterContext} from '../../context/FilterContext';

import './App.css';

const App = () => {
    const [filter, setFilter] = useState('');

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            <div>
                <Header/>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4 col-lg-3 col-xl-2 mt-3 text-center filter'>
                            <Filter/>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-9 col-xl-10 mt-3'>
                            <CocktailList/>
                        </div>
                    </div>
                </div>
            </div>
        </FilterContext.Provider>
    );
};

export default App;

import React, { lazy, Suspense } from "react";

import Spinner from "../Spinner";
import {useFilterContext} from "../../context/FilterContext";

const CocktailListItem = lazy(() => import ("../CocktailListItem"));

const CocktailList = () => {
    const { filter } = useFilterContext();

    if (!filter.drinks) {
        return (
            <div className='text-center mt-5 ml-5'>
                <Spinner />
            </div>
        );
    }
    return (
        <>
            {
                filter.drinks.map(({ strCategory }) => (
                    <Suspense key={strCategory} fallback = {<div className='text-center mt-5 ml-5'><Spinner /></div>}>
                        <CocktailListItem variable={strCategory} />
                    </Suspense>)
                )
            }
        </>
    );
};

export default CocktailList;

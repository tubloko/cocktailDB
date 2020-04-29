import React, {useState, useEffect} from "react";

import API from "../../API";

import './CocktailListItem.css';
import Spinner from "../Spinner";

const CocktailListItem = ({variable}) => {
    const api = new API();
    const [cocktails, setCocktails] = useState({});

    useEffect(() => {
        const getCocktails = async () => {
            const response = await api.getAllCocktails(variable);
            setCocktails(response);
        };
        getCocktails();
    }, []);

    return (
        <div>
            <h2 className='title mt-3 ml-4 pb-3'>{variable}</h2>
            <div className='row mt-4'>
                {
                    !cocktails.drinks ? (
                        <div className='text-center ml-5 mt-3'>
                            <Spinner/>
                        </div>
                    ) : (cocktails.drinks.map(({idDrink, strDrinkThumb, strDrink}) => {
                        return (
                            <div key={idDrink} className='col-sm-6 col-md-4 col-lg-2 mt-3'>
                                <div className='text-center'>
                                    <img src={strDrinkThumb} alt="drink" width={150} height={150}/>
                                    <p className='mt-2'>{strDrink}</p>
                                </div>
                            </div>
                        );
                    }))
                }
            </div>
        </div>
    );
};

export default CocktailListItem;

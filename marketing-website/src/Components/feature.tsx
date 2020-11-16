import React, { useEffect, useState } from 'react';
import { Cat } from '../Models/cat';

const Feature: React.FC<{cat: Cat}> = ({cat}) => {

    const determineEnergyLevel = () => {
        if (cat.breeds[0].energy_level >= 1 && cat.breeds[0].energy_level < 3) return 'Moody Doody';
        if (cat.breeds[0].energy_level >= 3 && cat.breeds[0].energy_level < 6) return 'Bingo Bango';
    };

    return (
        <>
           <div className="card h-100">
            <img 
                src={cat.url} 
                alt={cat.breeds[0].name} 
                className="card-img-top" 
                style={{
                    minWidth: '10rem',
                    maxHeight: '20rem',
                }}>
            </img>
            <div className="card-body">
                <h5 className="card-title">{cat.breeds[0].name}</h5>
                <p className="card-text">{cat.breeds[0].description}</p>
                <ul>
                    <li>Dog Friendly? <strong>{cat.breeds[0].dog_friendly === 1 ? 'Yes!' : 'No!!'}</strong></li>
                    <li>Energy Level:  <strong>{determineEnergyLevel()}</strong></li>
                    <li>Rare? <strong>{cat.breeds[0].rare === 1 ? 'Yes!' : 'No!!'}</strong></li>
                </ul>
            </div>
           </div>
        </>
    );
}

export default Feature;
import { useState, useEffect } from 'react';
import React from 'react';

const API_STARWARS = 'https://swapi.dev/api/people';

function ItemListFunctional() {

/*     useEffect(() => {
        console.log('@termino de montar ItemList');
        const api = fetch(API_STARWARS).then(data => {
            console.log('@data: ', data);
        }).catch(error => {
            console.log('@error: ', error);
        });
        console.log('@api: ', api);
    }, []); */

   /*  useEffect(() => {
        console.log('@termino de montar ItemList');
        fetch(API_STARWARS).then(body => body.json())
            .then(data => {
                console.log('@data: ', data);
            })
            .catch(error => {
                console.log('@error: ', error);
            });

    }, []); */

    useEffect(() => {
        console.log('@termino de montar ItemListFunctional');
        async function fetchData (){
            try {
                const api = await fetch(API_STARWARS);
                const body = await api.json();
                console.log('@functional api: ', api);
                console.log('@body: ', body);
            } catch(error) {
                console.log('@error: ', error);
            }
        } 
        fetchData();
            

    }, []);

    return (
        <div>
        
        </div>
    );
    
}

export default ItemListFunctional;
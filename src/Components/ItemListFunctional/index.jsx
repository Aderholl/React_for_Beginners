import { useState, useEffect } from 'react';
import React from 'react';
import "./ItemListFunctional.scss";

const API_STARWARS = 'https://swapi.dev/api/people';

function ItemListFunctional() {

    const [dataList, setDataList] = useState([]);
    console.log('@itemListFunctional dataList: ', dataList);

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
                const results = data.results;
                setDataList(results);
            })
            .catch(error => {
                console.log('@error: ', error);
            });

    }, []); */

    useEffect(() => {
        console.log('@termino de montar ItemListFunctional');
        async function fetchData (){
            try {
                const body = await fetch(API_STARWARS);
                const data = await body.json();
                console.log('@class body: ', body);
                console.log('@data: ', data);
                const results = data.results;
                setDataList(results);
            } catch(error) {
                console.log('@error: ', error);
            }
        } 
        fetchData();
            

    }, []);

    return (
        <div>
                {dataList.map((value, index) => {
                    console.log ('@value: ', value);
                    return (
                        <div key={index} className="cardfunctional">
                            <h1>Name:{value.name}</h1>
                            <h2>height:{value.height}</h2>
                        </div>
                    );
                })}
        </div>
    );
    
}

export default ItemListFunctional;
import { useState, useEffect } from 'react';
import React from 'react';
import Card from '../Card';
import "./ItemListFunctional.scss";

const API_STARWARS = 'https://swapi.dev/api/people';

function ItemListFunctional() {
    const [page, setPage] = useState(1);
    
        const [dataList, setDataList] = useState([]);
   // http://swapi.dev/api/people/?page=2
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
                const body = await fetch(`${API_STARWARS}/?page=${page}`);
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
            

    }, [page]);

    function switchPage(step) {
        if (step === -1 && page > 0) {
            setPage(prev => prev - 1)
        }
        if (step === 1 && page < 9) {
            setPage(prev => prev + 1)
        }
    }

    return (
        <div className="container">
            <h3>Itemlist Functional</h3>
            <div className="cardContainer">
                {dataList.map((value, index) => {
                    console.log ('@value: ', value);
                    return (
                        <Card index={index} key={index} name={value.name} height={value.height} />
                    );
                })}
            </div>
            <div className="pagination">
                <button type="button" onClick={() => switchPage(-1)}>{"<"}</button>
                <span>{page}</span>
                <button type="button" onClick={() => switchPage(1)}>{">"}</button>
            </div>
        </div>
    );
    
}

export default ItemListFunctional;
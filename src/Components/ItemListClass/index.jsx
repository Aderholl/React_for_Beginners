import { Component } from 'react';
import React from 'react';

const API_STARWARS = 'https://swapi.dev/api/people';

class ItemListClass extends Component {

/*     componentDidMount() {
        console.log('@termino de montar ItemList');
        const api = fetch(API_STARWARS).then(data => {
            console.log('@data: ', data);
        }).catch(error => {
            console.log('@error: ', error);
        });
        console.log('@api: ', api);
    } */

   /*  componentDidMount() {
        console.log('@termino de montar ItemList');
        fetch(API_STARWARS).then(body => body.json())
            .then(data => {
                console.log('@data: ', data);
            })
            .catch(error => {
                console.log('@error: ', error);
            });

    } */

    componentDidMount() {
        console.log('@termino de montar ItemListClass');
        async function fetchData (){
            try {
                const api = await fetch(API_STARWARS);
                const body = await api.json();
                console.log('@class api: ', api);
                console.log('@body: ', body);
            } catch(error) {
                console.log('@error: ', error);
            }
        } 
        fetchData();
    }

    render() {
        return (
            <div>
            
            </div>
        );
    }
    
}

export default ItemListClass;
import { Component } from 'react';
import React from 'react';
import "./ItemListClass.scss";

const API_STARWARS = 'https://swapi.dev/api/people';

class ItemListClass extends Component {

    constructor(props) {
        super(props);
        this.state={
            dataList:[] 
        };
        /* 
        //esto se hace solo para versiones viejas donde el contexto no esta bindeado(estrategia 1)
        this.fetchData=this.fetchData.bind(this); */
    }
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
                const results = data.results;
                this.setState({ dataList: results });
            })
            .catch(error => {
                console.log('@error: ', error);
            });

    }
 */
    async componentDidMount() {
        console.log('@termino de montar ItemListClass');
        await this.fetchData();
    }

    async fetchData() {
        try {
            const body = await fetch(API_STARWARS);
            const data = await body.json();
            console.log('@class body: ', body);
            console.log('@data: ', data);
            const results = data.results;
            this.setState({ dataList: results });
        } catch(error) {
            console.log('@error: ', error);
        }
    } 

/*     
    //esto se hace solo para versiones viejas donde el contexto no esta bindeado(estrategia 2)
    fetchData = async () => {
        try {
            const body = await fetch(API_STARWARS);
            const data = await body.json();
            console.log('@class body: ', body);
            console.log('@data: ', data);
            const results = data.results;
            this.setState({ dataList: results });
        } catch(error) {
            console.log('@error: ', error);
        }
    }  */

    render() {
        console.log('@itemListClass this.state: ', this.state);
        return (
            <div>
                {this.state.dataList.map((value, index) => {
                    console.log ('@value: ', value);
                    return (
                        <div key={index} className="card">
                            <h1>Name:{value.name}</h1>
                            <h2>height:{value.height}</h2>
                        </div>
                    );
                })}
            </div>
        );
    }
    
}

export default ItemListClass;
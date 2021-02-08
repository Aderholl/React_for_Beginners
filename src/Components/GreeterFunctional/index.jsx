import { useState, useEffect } from 'react';
import './GreeterFunctional.scss';

function GreeterFunctional({ className }) {
    const [name, setName] = useState(''); 

    useEffect(() => {
        console.log('@termino de montar el funcional');
        const timer = setTimeout(() => {
            setName('David');
            clearTimeout(timer);
        }, 12000);
    }, []);

    useEffect(() => {
        if (name && className) {
            console.log('@ClassName: ', className);
            console.log('@name: ', name);
        }
    }, [className, name]);

     useEffect(() => {
        return () => {
            console.log('@componentWillUnmount xd Functional!!!!!!');
        }
    }, []);

    return (
        <div className={className}>GreeterFunctional {name}</div>
    );

}

export default GreeterFunctional;
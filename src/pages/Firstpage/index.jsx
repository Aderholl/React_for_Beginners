import React, { Fragment } from 'react';
import GreeterClass from '../../Components/GreeterClass';
import ItemListClass from '../../Components/ItemListClass';

function FirstPage() {
    return (
        <Fragment>
            <GreeterClass />
            <ItemListClass />
        </Fragment>
    );
}

export default FirstPage;
import React from 'react';
import './PaginationButtom.scss';

function PaginationButtom(props) {

    return (
        <div className="paginationb">
            <button className="buttonpag" type="button" onClick={() => props.switchPage(-1)}>{"<"}</button>
                <span>{props.page}</span>
            <button className="buttonpag" type="button" onClick={() => props.switchPage(1)}>{">"}</button>
        </div>
    );
}

export default PaginationButtom;
import React from 'react';
import PropTypes from 'prop-types';

const SearchKeyPad = props => {
    return (
        <div className="header-searchpad">
           <input className="header-searchpad-input" value={props.searchValue} onChange={props.changeSearchValue} placeholder="Поиск"/>
        </div>
    );
};

SearchKeyPad.propTypes = {
    searchValue:PropTypes.string.isRequired,
    changeSearchValue:PropTypes.func.isRequired,
};

export default SearchKeyPad;
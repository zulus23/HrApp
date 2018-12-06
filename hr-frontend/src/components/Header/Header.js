import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import './header.scss'
import SearchKeyPad from "./SearchKeyPad";
import Logo from "./Logo";
class Header extends Component {
    find = (event)=> {
        console.log(event.target.value);
    }
    render() {
        return (
            <div className="header-conteiner">
                <Logo/>
                <SearchKeyPad  searchValue="" changeSearchValue={this.find}/>
            </div>
        );
    }
}

/*Header.propTypes = {};*/

export default Header;
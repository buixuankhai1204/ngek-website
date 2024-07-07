import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as Logo} from '../../logo.svg';

AdminHeader.propTypes = {};

function AdminHeader() {
    return (
        <div className="w-full bg-[#E5E5E5] p-0 flex justify-around">

            <Logo width="50px" height="50px" className="inline-block justify-center "/>
        </div>
    );
}

export default AdminHeader;
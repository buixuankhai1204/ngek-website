import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactComponent as Logo } from '../../logo.svg';

Sidebar.propTypes = {

};

function Sidebar() {
    return (
        <div className="w-[230px] py-4 text-left bg-white h-[1200px]">
            <div  className="flex justify-center w-full pb-7">
                <Logo width="100px" height="100px" />
            </div>
            <ul>
                <li className="flex justify-items-start gap-8 px-[35px] py-4 hover:text-red-800 hover:cursor-pointer">
                    <FontAwesomeIcon icon={faUser as IconProp}/>
                    <p className="text-lg ">User</p>
                </li>
                <li className="flex justify-items-start gap-8 px-[35px] py-4 hover:text-red-800 hover:cursor-pointer">
                    <FontAwesomeIcon icon={faUser as IconProp}/>
                    <p className="text-lg ">Product</p>
                </li>
                <li className="flex justify-items-start gap-8 px-[35px] py-4 hover:text-red-800 hover:cursor-pointer">
                    <FontAwesomeIcon icon={faUser as IconProp}/>

                    <p className="text-lg ">Category</p>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
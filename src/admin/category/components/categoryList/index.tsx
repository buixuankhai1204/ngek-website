import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrashCan} from "@fortawesome/free-regular-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Link} from "react-router-dom";
import classNames from "classnames";


export interface Category {
    _id: number;
    parentCategoryId: number;
    name: string;
    description: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

function CategoryList({categories}: { categories: Category[] }) {
    if (!categories || !categories.length) return (<div>loading</div>);
    console.log(categories)
    return (
        <>
            {categories.map(category => {
                    return (
                        <tr  className={classNames({hidden: !category.isActive, 'bg-white': true })}>
                            <th className="px-5" scope="row">
                                <input type="checkbox"/>
                            </th>
                            <td className="px-6 py-7 whitespace-nowrap text-sm text-gray-500 border-b-2">
                                {category.name}
                            </td>
                            <td className="px-6 py-7 whitespace-nowrap text-sm text-gray-500 border-b-2">
                                {category.description}
                            </td>
                            <td className="px-6 py-7 whitespace-nowrap text-sm text-gray-500 border-b-2">
                                {category.createdAt}
                            </td>
                            <td className="px-6 py-7 whitespace-nowrap text-sm text-gray-500 border-b-2">
                                {category.updatedAt}
                            </td>
                            <td className=" py-2 px-4">
                                <Link to={"/admin/category/" + category._id}>
                                    <button

                                        className="text-blue-500 hover:text-blue-700 mx-2"
                                    >
                                        <FontAwesomeIcon icon={faPenToSquare as IconProp}></FontAwesomeIcon>
                                    </button>
                                </Link>

                                <button className="text-red-500 hover:text-red-700 mx-2">
                                    <FontAwesomeIcon icon={faTrashCan as IconProp}></FontAwesomeIcon>
                                </button>
                            </td>
                        </tr>
                    )
                }
            )}</>)
}


export default CategoryList;
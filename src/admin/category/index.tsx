import React, {useEffect, useState} from 'react';
import CategoryList, {Category} from "./components/categoryList";

AdminCategory.propTypes = {};


function AdminCategory() {
    const [data, setData] = useState<Category[]>();
    useEffect(() => {
        const fetchData = () => {
            fetch("http://localhost:8000/category")
                .then((res) => res.json())
                .then((categories) => {
                    if (categories) {
                        setData(categories);
                    }
                })
                .catch((err) => {
                });
        };
        fetchData();
    }, []);

    function HandleDelete(id: number) {

    }

    if (!data) return null;
    return (
        <>
            <h1 className="text-3xl font-bold pb-6">Category</h1>
            <div className="pb-8">
                <p className="pb-3">Name</p>
                <input className="rounded-sm"/>
            </div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="w-full divide-gray-200">
                                <thead>
                                <tr className="text-black bg-white border-b-2">
                                    <th scope="row" className=" py-7">
                                        <input type="checkbox"/>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-6 text-start text-xs  text-black font-bold uppercase"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-6 text-start text-xs  text-black font-bold uppercase"
                                    >
                                        description
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-6 text-start text-xs  text-black font-bold uppercase"
                                    >
                                        Created at
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-6 text-start text-xs  text-black font-bold uppercase"
                                    >
                                        Updated at
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-6 text-start text-xs  text-black font-bold uppercase"
                                    >
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                <CategoryList categories={data}/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default AdminCategory;
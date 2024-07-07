import React, {MouseEventHandler} from 'react';
import PropTypes from 'prop-types';
import LoginForm, {ILogin} from "./components/loginForm";
import {IResponse} from "../../../components/model/response";
import {useAuth} from "./components/author.provider";

Index.propTypes = {};

export interface IMetadata extends IResponse<IMetadata>{}
function Index() {
    const [loginData, setLoginData] = React.useState<ILogin>({username: "", password: ""} as ILogin);
    const auth: any = useAuth();

    function handleSubmitForm(event: any) {
        alert(JSON.stringify(loginData));
        if (loginData.username !== "" && loginData.password !== "") {
            auth.loginAction(loginData);
            return;
        }
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setLoginData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div className="h-screen min-h-screen max-h-screen bg-gray-200 flex justify-center items-center p-4">
            <div className="bg-white shadow w-full p-4 rounded shadow-2xl text-gray-700 sm:w-96">
                <div className="flex justify-end">
                    <img src="https://www.ns-logo.com/wp-content/uploads/2020/07/logo-icon-png-8.png" alt=""
                         className="w-8"/>
                </div>

                <p className="text-center pb-2 text-3xl">Welcome</p>

                <LoginForm loginInterface={loginData} handleSubmitEvent={handleSubmitForm} handleInputChange={handleInputChange} />

                <hr/>

                <div className="mt-8 relative flex justify-around">
                    <div className="bg-blue-800 h-12 w-12 flex justify-center items-center rounded-full text-white">
                        <i className="fab fa-facebook text-3xl"></i>
                    </div>
                    <div className="bg-blue-500 h-12 w-12 flex justify-center items-center rounded-full text-white">
                        <i className="fab fa-twitter text-3xl"></i>
                    </div>

                    <div className="bg-red-500 h-12 w-12 flex justify-center items-center rounded-full text-white">
                        <i className="fab fa-google text-3xl"></i>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 right-0">
                <button id="switchTheme">
                    <i className="fab fa-codepen"></i>
                </button>
            </div>
        </div>
    );
}

export default Index;
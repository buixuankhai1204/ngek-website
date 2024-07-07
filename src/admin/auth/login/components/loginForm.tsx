import React from 'react';
import PropTypes from 'prop-types';

export interface ILogin {
    username: string,
    password: string,
}
// LoginForm.propTypes = {
//     username: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
// };

function LoginForm({loginInterface, handleInputChange, handleSubmitEvent}: {
    loginInterface: ILogin,
    handleInputChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    handleSubmitEvent?: React.FormEventHandler<HTMLFormElement> | undefined
}) {
    return (
        <form onSubmit={handleSubmitEvent} className="my-5" method="post">
            <div className="pb-5 text-sm text-center">
                <p>You don’t have an account? <a href="#" className="text-blue-500">Register now!</a></p>
            </div>

            <div className="pb-5">
                <input type="text"
                       name="username"
                       className="block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                       placeholder="Username"
                       onChange={handleInputChange}

                />

            </div>

            <div className="pb-5">
                <input type="text"
                       name="password"
                       className="block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                       placeholder="Password"
                       onChange={handleInputChange}
                />
            </div>

            <div className="pb-5">
                <input type="checkbox" id="rememberPassword"/>
                <label htmlFor="rememberPassword">Remember password</label>
            </div>

            <div className="pb-5 text-right text-sm">
                <a href="#" className="text-blue-500">Forgot your password?</a>
            </div>

            <button
                    className="bg-blue-500 p-2 w-full text-white rounded">LogIn
            </button>
        </form>
    );
}

export default LoginForm;
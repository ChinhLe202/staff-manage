import { LoginProvider } from 'core-modules';
import { Login } from '../containers/login';

export const LoginScreen = () => {
    return (
        <LoginProvider>
            <div>
                <Login />
            </div>
        </LoginProvider>
    );
};

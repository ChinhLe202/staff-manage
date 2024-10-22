import { LoginProvider } from 'core-modules';
import { BannerLogin } from '../components/login/contents/banner-login/bannerLogin';
import { FormLogin } from '../components/login/contents/form-login/formLogin';
import { Footer } from '../components/login/footer/footer';
import { Header } from '../components/login/headers/header';

export const Login = () => {
    return (
        <LoginProvider>
            <div>
                <Header />
                <div className='flex p-16 bg-orange-400'>
                    <BannerLogin />
                    <FormLogin />
                </div>
                <Footer />
            </div>
        </LoginProvider>
    );
};

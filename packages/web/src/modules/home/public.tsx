import { Footer } from './component/footers/footer';
import { Header } from './component/headers/header';
import { Category } from './component/sections/categories/category';
import { Content } from './component/sections/contents/content';
import { Widget } from './component/sections/widgets/widget';

export const PublicScreen = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-50'>
            <Header />
            <div className='flex space-x-4 p-4'>
                <Category />
                <Content />
                <Widget />
            </div>
            <Footer />
        </div>
    );
};

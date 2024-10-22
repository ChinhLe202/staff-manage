import { observer } from 'mobx-react';
import { Outlet } from 'react-router-dom';
import { Header } from 'src/based/components/layout/Header/header';
import { SubMenu } from 'src/based/components/layout/Menu/sub-menu';
import { Breadcrumb } from '../common/breadcrumb';
import { MainMenu } from './Menu/main-menu';

export const PublicLayout = observer(() => {
    return (
        <div className='flex w-full h-full overflow-hidden'>
            <MainMenu />
            <div className='flex flex-col w-full h-screen'>
                <Header />
                <Breadcrumb />
                <div className='flex h-full'>
                    <SubMenu />
                    <div className='w-full'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
});

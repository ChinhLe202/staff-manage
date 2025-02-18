import { observer } from 'mobx-react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PublicLayout } from './based/components/layout/public';
import { LoginRoutes } from './modules/authLogin/routes';
import { PublicScreen } from './modules/home/public';
import { StaffScreen } from './modules/staff/screens/staff-screen';

export const RouteApp = observer(() => {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path='/' element={<PublicScreen />} />
                <Route path='/login' element={<LoginRoutes />} />
                <Route path='/staff' element={<StaffScreen />} />
            </Route>
        </Routes>
    );
});

const RequireAuth = observer(({ children }: { children: JSX.Element }) => {
    let location = useLocation();
    // if (!sessionStore.session) {
    //     return <Navigate to="/login" state={{ from: location }} replace />;
    // }
    return children;
});

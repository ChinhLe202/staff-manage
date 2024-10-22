import {
    mdiAccountGroupOutline,
    mdiBullhornOutline,
    mdiChartLine,
    mdiClipboardListOutline,
    mdiCogOutline,
    mdiCreditCardCheckOutline,
    mdiMenu,
    mdiPackageVariantClosedCheck,
    mdiPointOfSale,
    mdiTruckFastOutline,
    mdiWarehouse
} from '@mdi/js';
import Icon from '@mdi/react';

export const MainMenu = () => {
    const MenuItems = [
        { icon: mdiMenu, title: '' },
        { icon: mdiChartLine, title: 'Dashboard' },
        { icon: mdiBullhornOutline, title: 'Marketing' },
        { icon: mdiPointOfSale, title: 'Sales' },
        { icon: mdiWarehouse, title: 'Kho' },
        { icon: mdiTruckFastOutline, title: 'Vận chuyển' },
        { icon: mdiCreditCardCheckOutline, title: 'Thanh toán' },
        { icon: mdiChartLine, title: 'Báo cáo' },
        { icon: mdiAccountGroupOutline, title: 'Nhân viên' },
        { icon: mdiPackageVariantClosedCheck, title: 'Sản phẩm' },
        { icon: mdiClipboardListOutline, title: 'Đơn hàng' }
    ];

    return (
        <div className='bg-[#EEF3FE] py-4 flex flex-col text-xs font-medium px-2'>
            <div className=''>
                {MenuItems.map((item, index) => (
                    <div key={index} className='flex flex-col items-center mb-4 '>
                        <Icon path={item.icon} size={1} className='text-gray-600' />
                        {item.title && <span className='whitespace-nowrap'>{item.title}</span>}
                    </div>
                ))}
            </div>
            <div className='flex flex-col items-center mt-auto'>
                <Icon path={mdiCogOutline} size={1} className='text-gray-600' />
                <span>Settings</span>
            </div>
        </div>
    );
};

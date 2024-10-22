import { cibFacebook, cibTelegram, cibYoutube } from '@coreui/icons';
import { CIcon } from '@coreui/icons-react';

export const Footer = () => {
    return (
        <div className='flex flex-col p-4 bg-white m-4'>
            <div className='flex justify-between'>
                <div className='flex flex-col space-y-2'>
                    <span className='font-bold'>CHĂM SÓC KHÁCH HÀNG</span>
                    <a href='/#' className='hover:underline'>
                        Trung tâm trợ giúp
                    </a>
                    <a href='/#' className='hover:underline'>
                        Hướng dẫn sử dụng
                    </a>
                    <a href='/#' className='hover:underline'>
                        Chính sách bảo trì & vận hành
                    </a>
                </div>

                <div className='flex flex-col space-y-2'>
                    <span className='font-bold'>VỀ ORES</span>
                    <a href='/#' className='hover:underline'>
                        Giới thiệu về ORES Việt Nam
                    </a>
                    <a href='/#' className='hover:underline'>
                        Tuyển dụng
                    </a>
                    <a href='/#' className='hover:underline'>
                        Điều khoản sử dụng
                    </a>
                    <a href='/#' className='hover:underline'>
                        Chính sách bảo mật
                    </a>
                    <a href='/#' className='hover:underline'>
                        Mẹ và bé
                    </a>
                    <a href='/#' className='hover:underline'>
                        Truyền thông
                    </a>
                </div>

                <div className='flex flex-col space-y-2'>
                    <span className='font-bold'>THANH TOÁN</span>
                    <p>Hỗ trợ đặt hàng</p>
                    <a href='/#' className='hover:underline'>
                        18006821
                    </a>
                </div>

                <div className='flex flex-col space-y-2'>
                    <span className='font-bold'>THEO DÕI CHÚNG TÔI TRÊN</span>
                    <div className='flex space-x-2'>
                        <p>
                            <CIcon icon={cibFacebook} size='lg' style={{ height: '20px' }} />
                        </p>
                        <p>
                            <CIcon icon={cibYoutube} size='lg' style={{ height: '20px' }} />
                        </p>
                        <p>
                            <CIcon icon={cibTelegram} size='lg' style={{ height: '20px' }} />
                        </p>
                    </div>
                </div>
            </div>

            <hr className='border-t border-gray-300 my-4' />

            <div className='flex justify-between p-4 bg-white'>
                <div className='text-gray-600 flex-shrink-0'>
                    © {new Date().getFullYear()} | Design & Developer OWS VIET NAM | All Rights Reserved
                </div>

                <div className='flex flex-col items-end space-y-1'>
                    <span className='font-bold'>CÔNG TY CỔ PHẦN OWS VIỆT NAM</span>
                    <span className='text-gray-600'>
                        Hà Nội: 14 Nguyễn Cảnh Dị, Phường Đại Kim, Quận Hoàng Mai, Hà Nội, Việt Nam.
                    </span>
                    <span className='text-gray-600'>Tokyo: 230-0082, Kanagana, Yokohama, Tsurumni-ku</span>
                    <span className='text-gray-600'>024.730.969.95</span>
                    <span className='text-gray-600'>info@ows.vn</span>
                </div>
            </div>
        </div>
    );
};

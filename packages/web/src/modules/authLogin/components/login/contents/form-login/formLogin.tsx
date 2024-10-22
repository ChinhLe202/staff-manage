import { useLoginContext } from 'core-modules';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FormLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { onLogin, error, username: loggedInUser } = useLoginContext();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!username || !password) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }

        onLogin(username, password);

        if (loggedInUser) {
            navigate('/#');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='w-1/4 p-6 bg-white rounded-lg shadow-md'>
            <div className='flex justify-between items-center mb-6'>
                <span className='text-xl font-bold'>Đăng nhập</span>
                <img src='/path/to/logo.png' alt='Logo' className='h-12' />
            </div>

            {error && <div className='text-red-300 mb-4'>{error}</div>}

            <div className='mb-4'>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-600'
                    placeholder='Tài khoản/SĐT'
                />
            </div>

            <div className='mb-6 relative'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-600'
                    placeholder='Mật khẩu'
                />
                <span
                    className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? <i className='fa fa-eye-slash'></i> : <i className='fa fa-eye'></i>}
                </span>
            </div>

            <div className='flex justify-between mb-6'>
                <label className='inline-flex items-center'>
                    <input type='checkbox' className='form-checkbox' />
                    <span className='ml-2'>Ghi nhớ</span>
                </label>
                <a href='#' className='text-blue-500 text-sm'>
                    Quên mật khẩu
                </a>
            </div>

            <div className='flex justify-between mb-4'>
                <a href='#' className='text-black p-2 rounded hover:bg-gray-400'>
                    Quay lại
                </a>
                <button
                    type='submit'
                    className='bg-green-400 text-white p-2 rounded hover:bg-blue-700 ml-2'
                    onClick={handleLogin}
                >
                    Đăng Nhập
                </button>
            </div>

            <div className='text-center text-sm text-blue-500 mt-20'>
                <p>Hướng dẫn sử dụng</p>
            </div>
        </div>
    );
};

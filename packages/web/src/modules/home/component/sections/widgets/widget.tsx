import { Line } from 'react-chartjs-2';
import mapImage from './Screenshot 2024-10-01 095240.png';

export const Widget = () => {
    const monthDays = Array.from({ length: 30 }, (_, i) => i + 1);

    const data = {
        labels: monthDays,
        datasets: [
            {
                label: 'Statistical',
                data: monthDays.map(() => Math.floor(Math.random() * 100)),
                fill: false,
                borderColor: 'gray',
                tension: 0.1
            }
        ]
    };

    return (
        <div className='widget bg-white p-4 rounded-lg shadow border border-black w-80 flex-none'>
            <div className='p-4 rounded-lg shadow border border-black '>
                <h2 className='text-lg font-bold mb-2 text-center'>FEB 2024</h2>
                <div className='grid grid-cols-7 gap-2 text-center'>
                    <div className='font-bold'>S</div>
                    <div className='font-bold'>M</div>
                    <div className='font-bold'>T</div>
                    <div className='font-bold'>W</div>
                    <div className='font-bold'>T</div>
                    <div className='font-bold'>F</div>
                    <div className='font-bold'>S</div>

                    {monthDays.map((day) => (
                        <div key={day} className='border p-2'>
                            {day}
                        </div>
                    ))}
                </div>
            </div>
            <div className='p-4 rounded-lg shadow'>
                <Line data={data} />
            </div>
            <div className='p-4 rounded-lg shadow h-64'>
                <img src={mapImage} alt='Map' className='w-full h-full object-cover' />
            </div>
        </div>
    );
};

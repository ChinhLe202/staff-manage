const HotNewsSection = () => {
    return (
        <div className='bg-white p-6 rounded-lg shadow border border-black min-h-[150px] flex items-center justify-center w-full'>
            <p className='text-center'>Hot news</p>
        </div>
    );
};

const PhotoSideSection = () => {
    return (
        <div className='bg-white rounded-lg shadow border border-black min-h-[150px] flex items-center justify-center relative w-full'>
            <div className='absolute left-4 top-2 w-80 h-20 border border-black bg-white'></div>
            <div className='absolute left-8 top-8 w-80 h-20 border border-black bg-white'></div>
            <div className='absolute left-12 top-14 w-80 h-20 border border-black bg-white flex justify-center'>
                <p className='text-center'>Photo Side</p>
            </div>
        </div>
    );
};

const NewsSection = () => {
    const newsItems = ['News 1', 'News 2', 'News 3', 'News 4', 'News 5', 'News 6'];

    return (
        <div className='grid grid-cols-3 gap-3 w-full'>
            {newsItems.map((news, index) => (
                <div className='bg-white rounded-lg shadow border border-black min-h-[150px] flex items-center justify-center'>
                    <p className='text-center'>{news}</p>
                </div>
            ))}
        </div>
    );
};

export const Content = () => {
    return (
        <div className='flex flex-col space-y-4 w-full'>
            <div className='flex space-x-4'>
                <HotNewsSection />
                <PhotoSideSection />
            </div>
            <NewsSection />
        </div>
    );
};

export const ToolBar = ({ quantity, title }: any) => {
    return (
        <div className='bg-gray-50 p-2'>
            <span className='text-xs test-gray-500'>
                Có tất cả {quantity} {title}
            </span>
        </div>
    );
};

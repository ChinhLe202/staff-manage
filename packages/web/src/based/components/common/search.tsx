import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';
import { ISearch } from 'core-models';
import React from 'react';

export const Search = <ItemType extends object>({
    data,
    searchField,
    placeholder = 'Tìm kiếm',
    onResults
}: ISearch<ItemType>) => {
    const [query, setQuery] = React.useState<string>('');
    /*************  ✨ Codeium Command ⭐  *************/
    const handleSearch = (q: string) => {
        setQuery(q);
        const filteredData = data.filter((item) => {
            const field = item[searchField] as string;
            return field.toLowerCase().includes(q.toLowerCase());
        });

        onResults(filteredData);
    };

    return (
        <div className='flex border rounded-md p-2 max-w-[480px] w-full'>
            <Icon path={mdiMagnify} size={1} className='text-gray-500' />
            <input
                type='text'
                placeholder={placeholder}
                className='focus:outline-none px-2 flex-grow'
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
};

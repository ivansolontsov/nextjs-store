import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { AutoComplete, Input, Spin } from 'antd';
import styles from '../styles/Search.module.css'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useGetSearchResultsQuery } from '../store/search/searchApi';
import { IRootObject } from '../store/products/productTypes';
import Link from 'next/link';
import { PRODUCT_ROUTE } from '../utils/consts';
import type { InputRef } from 'antd';


type Props = {

}

interface ISearchResults {
    value?: string,
    label?: ReactElement
}

const Search: React.FC<Props> = ({ }) => {
    const inputRef = useRef<InputRef>(null);
    const { searchOpen } = useTypedSelector(state => state)
    const [options, setOptions] = useState<ISearchResults[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [notFound, setNotFound] = useState<string>('');
    const [query, setQuery] = React.useState<string>('')
    const { data, isLoading, error } = useGetSearchResultsQuery(query, { skip: !query })

    const clearInput = () => {
        setOptions([]);
        setNotFound('');
    }

    const searchResult = (data: IRootObject) => {
        if (data.total != 0) {
            return data.products.map((item, index) => {
                return {
                    value: item.title,
                    label: (
                        <Link
                            href={`${PRODUCT_ROUTE}/${item.id}`}
                            key={index}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <span>
                                {item.title}
                            </span>
                            <span style={{ textTransform: 'capitalize' }}>
                                in {item.category}
                            </span>
                        </Link>
                    ),
                }
            })
        } else {
            setNotFound('No Results...');
            return []
        }
    }

    const searchSkeleton = () => {
        return [{
            value: 'Loading...',
            label: (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '5px 5px 0px 5px'
                    }}
                >
                    <Spin />
                </div>
            ),
        }]
    }

    React.useEffect(() => {
        setOptions(data ? searchResult(data) : [])
    }, [isLoading, data, error])


    // DEBOUNCER START

    React.useEffect(() => {
        const makeQuery = setTimeout(() => {
            setQuery(searchText)
        }, 1000)
        return () => {
            clearTimeout(makeQuery)
        }
    }, [searchText])

    // DEBOUNCER END

    const handleSearch = (inputValue: string) => {
        if (inputValue) {
            setSearchText(inputValue)
            setOptions(searchSkeleton())
        } else {
            clearInput()
        }
    };

    return (
        <div className={`${styles.search} ${searchOpen.isOpen ? styles.search__input_visible : ''}`}>
            <AutoComplete
                className={`${styles.search__input} ${searchOpen.isOpen ? styles.search__input_open : ''}`}
                options={options}
                onSearch={handleSearch}
                notFoundContent={notFound}
            >
                <Input.Search size="large" placeholder="IPhone" ref={inputRef} />
            </AutoComplete>
        </div>
    )
}

export default Search
import { Button } from 'antd'
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons'
import React from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

type Props = {}

const SearchButton = (props: Props) => {
    const { searchOpen } = useTypedSelector(state => state)
    const { openSearch, closeSearch } = useActions()

    const handleSearchButton = () => {
        if (searchOpen.isOpen) {
            closeSearch()
        } else {
            openSearch()
        }
    }

    return (
        <Button
            onClick={() => handleSearchButton()}
            size='large'
            type="ghost"
            icon={
                searchOpen.isOpen
                    ? <CloseCircleOutlined style={{ fontSize: '24px' }} />
                    : <SearchOutlined style={{ fontSize: '24px' }} />
            }
            className='header__cart-button' />
    )
}

export default SearchButton
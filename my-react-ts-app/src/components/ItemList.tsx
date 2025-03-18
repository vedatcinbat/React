import React from 'react'

interface Item {
    id: number;
    name: string;
}

const items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
]

const ItemList: React.FC = () => {
  return (
    <>
        <div>Item List</div>
        <ul>
            {items.map((item, key) => (
                <li key={key}>{item.name}</li>
            ))}
        </ul>
    </>
  )
}

export default ItemList
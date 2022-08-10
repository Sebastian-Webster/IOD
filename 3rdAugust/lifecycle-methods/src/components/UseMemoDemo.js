import React, {useState, useMemo, useEffect} from 'react';
import axios from 'axios';

const UseMemoDemo = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const fetchData = () => {
        setError(null)
        axios.get('https://coinmap.org/api/v1/venues/')
        .then(response => response.data)
        .then(result => {
            setData(result)
        })
        .catch(error => {
            setError(error)
            console.error(error)
        })
    }

    const FilteredData = useMemo(() => {
        data.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
        data.filter(place => place.id < 100)
        return data
    }, [data])

    return (
        <>
            {error ? <h1 style={{color: 'red'}}>{String(error)}</h1>
            :
                <>
                    <button onClick={fetchData}>Refetch Data</button>
                    {
                        FilteredData.map(item => {
                        <p id={item.id}>{item.name}</p> 
                        })
                    }
                </>
            }
        </>
    )
}

export default UseMemoDemo
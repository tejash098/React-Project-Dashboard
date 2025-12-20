import React, { useEffect, useState } from 'react'

const Gitapifetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://api.github.com/users');
                console.log(response);
                const result = await response.json();
                console.log(result);
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Gitapifetch</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>
        </div>
    );
}

export default Gitapifetch
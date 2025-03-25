import React, { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost/api/data.php")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    if (!data) return <p>Loading...</p>;

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    );
}

export default App;

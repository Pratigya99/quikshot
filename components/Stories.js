import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";

function Stories() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.name.firstName(),
            id: i,
        }));
        setSuggestions(suggestions);
    }, []);
    return (
        <div>

        </div>
    )
}

export default Stories
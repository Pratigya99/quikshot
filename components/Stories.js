import { faker } from '@faker-js/faker';
import { useEffect } from "react";

function Stories() {
    

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.name.firstName(),
            id: i,
        }));
        console.log(suggestions);
    }, []);
    return (
        <div>

        </div>
    )
}

export default Stories
import { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    background-color: yellow;
    padding: 1rem;
`
const Component = () => {
    const [count, setCount] = useState(0);
    return (
        <StyledContainer>
            <div>
                <p> Count number: {count}</p>
            </div>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
            <button onClick={()=> setCount(count - 1)}>Decrement</button>
        </StyledContainer>
    )
}

export default Component;

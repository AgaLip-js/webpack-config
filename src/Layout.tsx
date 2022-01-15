import React, { useState } from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    color: green;
`

const Layout: React.FC = ({children})=>{
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    return (
    <>
    <h2>Layout Header</h2>
    <StyledButton onClick={toggleVisibility}>Show me the content!</StyledButton>
    {isVisible ?
        children :
        null
    }
    </>
    )
}

export default Layout;
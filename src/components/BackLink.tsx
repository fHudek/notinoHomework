import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(Link)`
    padding-right: '0.5rem';
    ::before {
        content: '< ';
        display: inline-block;
    }
`;

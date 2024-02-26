import styled from 'styled-components';

export const Table = styled.table`
width: 100%;
background-color: #fff;
padding: 20px;
box-shadow: 0 0 5px #ccc;
border-radius: 8px;
max-width: 1120px;
margin: 20px auto;
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;

export const Td = styled.td`
padding-top: 15px;
text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
word-break: break-all;
svg {
  width: 18px;
  height: 18px;
  cursor: pointer;
}
`;

export const Th = styled.th`
border-bottom: inset;
padding-bottom: 5px;
text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
width: ${(props) => (props.width ? props.width + '%' : 'auto')};
`;

import styled from "styled-components";

const style = styled.section`
display: flex;
align-items:baseline;
color:orange;

.artigo{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:25em;
    height:25em;
    background: black;
    border:5px groove orange;
    margin: 20px
}
img{
    max-width:200px
}

.artigo > .saibaMais{
    text-decoration: none;
    color:black;
    text-align:center;
    width:90%;
    background: #FFE609;
    border: 4px solid #FFE609;
    border-radius:5px;
}
.saibaMais:hover{
    width:95%;
    transition:0.3s;
}
`;

export default style;
import styled from "styled-components";

const style = {
   Tabela: styled.table`
    th, td{
        width:20.5em;
        text-align:center;
    }
    thead {
        background-color: #FFE609;
        color: #000;
    }
    th {
      text-align: center;
      height: 50px;
    }
    tbody tr:nth-child(odd) {
      background: orange;
    }
    tbody tr:nth-child(even) {
      background: #FFE609;
    }
    img{
        max-width:100px
    }
    .info{
        display:flex;
    }
`,
    Secao: styled.section`
        button{
            background: #FFE609;
            border: 4px solid #FFE609;
            width: 25em;
        }
    `
}

export default style;
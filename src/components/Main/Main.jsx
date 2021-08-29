import H1 from './estilo';


function Main (){
    return (
    <>
        <H1>Bem vindo {localStorage.getItem('githubUser')} </H1>
    </>
    );
}

export default Main;
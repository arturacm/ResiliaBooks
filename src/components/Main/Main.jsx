import style from './estilo';


function Main (){
    return (
    <>
    <style.Rotas>
        <style.UlRotas>
            <style.LiRotas>
                <h1>LIVRO</h1>
            </style.LiRotas>
            <style.LiRotas>
                <h1>GÊNERO</h1>
            </style.LiRotas>
            <style.LiRotas>
                <h1>AUTOR</h1>
                </style.LiRotas>
        </style.UlRotas>
    </style.Rotas>
        <style.H1>Bem vindo {localStorage.getItem('githubUser')} </style.H1>
    </>
    );
}

export default Main;
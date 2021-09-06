# Livraria Resilia Books
Em meio a uma das maiores crises hídricas da história, devemos fazer a nossa parte para economizar água. Que tal consumir ebooks?? 
Para se produzir uma única folha de papel A4, gasta-se 10L de água. Já pensou quanta água podemos economizar trocando o livro de papel pelo digital?? Vem comprar seu eBook com a gente!

## Stacks utilizadas para realizar o projeto

* JavaScript
* React 
* CSS
* Figma 
* Node.js

### Como rodar o projeto:

Você pode clonar o projeto e rodá-lo localmente seguindo os passos abaixo

- Acesse livraria API em: https://github.com/PATOLINODD/livraria_API
- Clone o repositório
- Abra em http://localhost:3000 em seu navegador
- Digite npm start no terminal do seu VSCode para rodar a API
- Depois disso, clone o projeto Resilia Books em: https://github.com/arturacm/ResiliaBooks.git
- Yarn para instalar as dependencias do projeto
- Yarn start
- Acessar http://localhost:3001 no navegador

Caso não consiga instalar os pacotes, siga os passos a seguir:

- Rode o comando `npm i - f ` no terminal do VSCode
- Rodem o comando ` npm audit fix `



### Protótipo
O protótipo foi feito no Figma e pode ser conferido no seguinte link (https://www.figma.com/file/iDfATWqWX1wuZfMs09NZ8F/ResiliaBooks?node-id=0%3A1). Optamos por fazer um prototipo antes para facilitar o trabalho da equipe.

# Aprendemos e utilizamos: 

### Axios

Usado para fazer requisições, Axios é um cliente HTTP baseado em promises.Pode ser utilizado no navegador. node ou qualquer serviço de API


### useEffect


` useEffect(() => {
    const req = async () => {
      await axios
        .get("http://localhost:3000/autores/")
        .then((response) => {
          setAutores(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    req();
  }, []);
//post
 async function enviar(){ `
 
Após renderização, é executado de forma assincrona.

### Styled-Components

` return (
        <Livros>
            
            {perfilEstaLogado?meusLivros.livros.map((livro,i)=>{
                return(
                    <div className="livro" key={i}>
                        <img src={livro.capaURL} alt={`imagem da capa do livro ${livro.titulo}`} />
                        <p>
                            {livro.titulo}
                        </p>
                        <p>
                            {livro.autorId}
                        </p>
                    </div>
                )
            }): (
                <h1>Usuario não logado</h1>
            )}
        </Livros>
    ) `

### React Router Dom 
Usado para navegar entre páginas diferentes da aplicação, pois, cada página é uma rota 

`
                
                return(
                    
                    <article key={item.id} className="artigo">
                        <h3 className="Titulo1">{item.titulo}</h3>
                        <Link to={`/livro/${item.id}`}> <img src={item.capaURL} alt="capa do Livro" className="img" /></Link>
           
             
                    </article>
                    
                    
                )
                
            }
            )}
            </Livros>
        
    )


`

 #### gostou!?? conheça mais sobre a gente, é só descer mais um pouco!

#
## ![github_devs](https://img.shields.io/badge/github_devs-100000?style=for-the-badge&logo=github&logocolor=white)
- [arturacm](https://github.com/arturacm)
- [galvaonana](https://github.com/galvaonana)
- [marcoscabral](https://github.com/marcoscabral93)
- [patolinodd](https://github.com/patolinodd) 
- [verginia-fleitas](https://github.com/verginia-fleitas)










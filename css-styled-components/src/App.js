import './App.css';
import styled from 'styled-components';

const Titulo = styled.h1`
color: #31e636;
`;

const Subtitulo = styled.h2`
color: green;
`;

const Artigo = styled.section`
color: #9393e2;
`;

const Titulo2 = styled.h1`
color: blue;
font-size: 25px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo>Meu Site</Titulo>
        <Subtitulo>Subtitulo</Subtitulo>
        <Artigo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente alias saepe molestiae illo omnis illum corporis error! Accusamus, similique dolor. Accusamus, quaerat praesentium? Incidunt ea repellendus illo in nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur necessitatibus explicabo ipsam assumenda aperiam quo mollitia quas ad repellendus, ullam ex! Quod corporis eum aliquid pariatur! Adipisci, soluta laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae porro provident modi molestias! Neque adipisci quas placeat, nostrum nemo tempora dolore itaque mollitia earum id quasi natus sint, commodi sed?</Artigo>

        <Titulo2>Segunda parte</Titulo2>
        <Artigo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente alias saepe molestiae illo omnis illum corporis error! Accusamus, similique dolor. Accusamus, quaerat praesentium? Incidunt ea repellendus illo in nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur necessitatibus explicabo ipsam assumenda aperiam quo mollitia quas ad repellendus, ullam ex! Quod corporis eum aliquid pariatur! Adipisci, soluta laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae porro provident modi molestias! Neque adipisci quas placeat, nostrum nemo tempora dolore itaque mollitia earum id quasi natus sint, commodi sed?</Artigo>

      </header>
    </div>
  );
}

export default App;

import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repository = {
    name:"A",
    description:"Teste",
    link: "http://localhost:8080/"
}
export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
           <ul>
           <RepositoryItem repository={repository}/>
           <RepositoryItem />
           </ul> 
        </section>
        
    );
}
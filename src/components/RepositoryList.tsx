import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

interface Repository{ // * Definir tipo apenas informações que vamos usar no componente
    id: string,
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]);
    
    /*
        *Executa a função de acordo com a lista de dependencias passada no segundo parametro
        *Se a lista for vazia, executa somente uma vez
        *Se o segundo parametro não for passado, o useEffect entra em loop
        *Se uma variavel de dependencia for atualizada dentro do useEffect, também entra em loop 
    */

    useEffect(() => {
        fetch('https://api.github.com/users/JuliaAzt/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, []);

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
           <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.id} repository={repository}/>;
                })}
                
           </ul> 
        </section>
        
    );
}
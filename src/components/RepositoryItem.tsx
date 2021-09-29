interface RepositoryItemProps{ // * Definir tipo apenas informações que vamos usar no componente
    repository:{
        name: string,
        description: string,
        html_url: string,
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    return(
        <li>
            <strong>{props.repository?.name ?? "Default"}</strong>
            <p>{props.repository?.description ?? "Description"}</p>
            <a href={props.repository?.html_url ?? "#"}>
                Acessar repositório
            </a>
        </li>   
    );
}
import { Counter } from './components/Counter'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'
export function App(){
    return (
        /*
        <div>
            <RepositoryList/>
            <Counter/>
        </div> 
        */

        /*Fragment (<> </>) - agrupa e não é produzido no html*/
        <> 
            <RepositoryList/>
            <Counter/>
        </> 
    )
}


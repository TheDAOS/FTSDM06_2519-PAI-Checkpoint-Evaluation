import { Provider } from 'react-redux'
import store from './store';
import type { ChildrenNodeType } from '../type';

function TodoProvider({ children }: ChildrenNodeType) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default TodoProvider;
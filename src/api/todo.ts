import axios from 'axios';
import { Todo } from '../type/todo';

const BASE_URL = 'https://mocki.io/v1/e8046011-847b-43b6-b6ba-c9b40de554c7';

export const getTodos = () =>
    axios
        .get<Todo[]>(`${BASE_URL}`)
        .then((response) => {
            const { data } = response;
            if (!Array.isArray(data)) {
                throw Error(`Todos response was not an array`);
            }
            data.forEach((dataItem) => {
                if (
                    typeof dataItem.id !== 'string' ||
                    typeof dataItem.title !== 'string' ||
                    typeof dataItem.description !== 'string'
                ) {
                    throw Error(`Type of todo ${dataItem.title} is nott corrrect!`);
                }
            });
            return data;
        })
        .catch((error: Error) => {
            // handle error
            console.log('Here would be a redirect to an error page, or setting of error to a store.', error);
        });

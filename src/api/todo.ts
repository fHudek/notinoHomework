import axios from 'axios';
import { Todo } from '../type/todo';

const BASE_URL = 'https://api.fake.rest/804ad78e-91b6-4b3f-b657-b1d4c15dd397';

export const getTodos = () =>
    axios
        .get<Todo[]>(`${BASE_URL}/todo`)
        .then((response) => {
            console.log(response);
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
            console.log('Redirect to an error page.', error);
        });

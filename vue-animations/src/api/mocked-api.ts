import { Data } from '@/api';
import { Todo } from '@/models';

export class MockedApi {
  public fetchTodos(): Promise<Todo[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Data.todos);
      }, 1000);
    });
  }
}

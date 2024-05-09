// src/todo/todo.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo, TodoStatus } from './models/todo.models';

@Injectable()
export class TodoService {
  // // 今回はDBと接続しないのでメモリ上にTodoを保存します。
  // private todos: Todo[] = [];

  // 全件取得のメソッド
  findAll(): Todo[] {
    const todo1 = new Todo();
    todo1.id = '0';
    todo1.status = TodoStatus.NEW;
    todo1.title = 'title0';
    todo1.description = 'description0';
    todo1.createdAt = new Date(2024);
    todo1.updatedAt = new Date(2024);

    const todo2 = new Todo();
    todo2.id = '1';
    todo2.status = TodoStatus.NEW;
    todo2.title = 'title1';
    todo2.description = 'description1';
    todo2.createdAt = new Date(2023);
    todo2.updatedAt = new Date(2023);

    const todo3 = new Todo();
    todo3.id = '2';
    todo3.status = TodoStatus.NEW;
    todo3.title = 'title2';
    todo3.description = 'description2';
    todo3.createdAt = new Date(2022);
    todo3.updatedAt = new Date(2022);

    return [todo1, todo2, todo3];
  }
  // idを元に一件取得のメソッド
  findOneById(id: string): Todo {
    const todo1 = new Todo();
    todo1.id = '0';
    todo1.status = TodoStatus.NEW;
    todo1.title = 'title0';
    todo1.description = 'description0';
    todo1.createdAt = new Date(2024);
    todo1.updatedAt = new Date(2024);

    const todo2 = new Todo();
    todo1.id = '1';
    todo1.status = TodoStatus.NEW;
    todo1.title = 'title1';
    todo1.description = 'description1';
    todo1.createdAt = new Date(2023);
    todo1.updatedAt = new Date(2023);

    const todo3 = new Todo();
    todo1.id = '2';
    todo1.status = TodoStatus.NEW;
    todo1.title = 'title2';
    todo1.description = 'description2';
    todo1.createdAt = new Date(2022);
    todo1.updatedAt = new Date(2022);

    const todos: Todo[] = [todo1, todo2, todo3];
    const result = todos.find((todo) => id === todo.id);
    if (!result) {
      // なかったら404エラーを返す。ビルトインのエラーも豊富にあってエラー処理も結構楽
      // https://docs.nestjs.com/exception-filters#built-in-http-exceptions
      throw new NotFoundException();
    }
    return result;
  }
}
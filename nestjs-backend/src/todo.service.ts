import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async createTodo(task: string, status: boolean): Promise<Todo> {
    const todo = this.todoRepository.create({ task, status });
    return this.todoRepository.save(todo);
  }

  async getAllTodos(): Promise<Todo[]> {
    return this.todoRepository.find();
  }
}

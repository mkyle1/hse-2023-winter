import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() { task, done }: { task: string; done: boolean }) {
    return this.todoService.createTodo(task, done);
  }

  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos();
  }
}

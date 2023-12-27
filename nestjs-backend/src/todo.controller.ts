import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() { task, status }: { task: string; status: boolean }) {
    return this.todoService.createTodo(task, status);
  }

  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos();
  }
}

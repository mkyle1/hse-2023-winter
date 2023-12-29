import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
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

  @Get("/id")
  getTodoById(@Body() { id }: { id: number }) {
    return this.todoService.getTodoById(id);
  }

  @Put()
  updateTodo(
    @Body() { id, status }: { id: number; status: boolean },
  ) {
    return this.todoService.updateTodo(id,status);
  }

  @Delete()
  deleteTodo(
    @Body() { id }: { id: number },
  ) {
    return this.todoService.deleteTodo(id);
  }
}

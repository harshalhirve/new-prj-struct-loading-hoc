import { lazy } from "react";

export const PostList = lazy(() => import("../containers/posts/PostList"));
export const PostForm = lazy(() => import("../containers/posts/PostForm"));
export const ToDoList = lazy(() => import("../containers/todos/ToDoList"));
export const ToDoForm = lazy(() => import("../containers/todos/ToDoForm"));
export const ErrorPage = lazy(() => import("../components/common/ErrorPage"));

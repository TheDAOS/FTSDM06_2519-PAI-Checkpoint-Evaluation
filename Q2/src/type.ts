import type React from "react";

export interface ChildrenNodeType {
  children: React.ReactNode;
}

export interface todoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface taskProp {
  task: todoType;
}

export interface stateType {
  todo: todoType[];
  loading: boolean;
  error: string | null;
  page: number;
}

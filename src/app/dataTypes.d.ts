interface ITodoItem {
    id: number;
    title: string;
    description: string;
    date: Date;
    isComplited?: boolean;
}

export { ITodoItem };
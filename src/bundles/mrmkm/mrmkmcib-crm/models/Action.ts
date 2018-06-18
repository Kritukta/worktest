interface Action<T> {
    type: string;
    payload: T;
    isError?: boolean;
    meta?: any;
}

export default Action;
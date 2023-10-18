export declare class FetchHTTP {
    private readonly API_SERVER;
    getData<TData>(endPoint: string): Promise<TData>;
}

export interface ISearch<T>{
    page:number;
    results:T
    total_pages: number,
    total_results: number,
}
export interface ISearchResult{
    id:number,
    name: string
}
export interface IVideo {

    key: string;
    name:string;

}

export interface IVideoRes <T>{
    id: number;
    results: T;
}
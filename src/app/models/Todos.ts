// export class Todo{
//     constructor(
//         public id:string,
//         public content: string,
//         public completed: string
//     ){}
// }
export class Todo{
    constructor(
        public content: string,
        public completed: boolean = false
    ){}
}

interface Hero {
    id: number;
    nombre: string;
    owner: string
}

export const heroes: Hero[] =[
    {
        id:1,
        nombre: "Iroman",
        owner: "Marvel"
    },
    {
        id:2,
        nombre: "spiderman",
        owner: "Marvel"
    },
    {
        id:3,
        nombre: "batman",
        owner: "DC"
    }
];
interface Tribe{
    name: string;
    department: string;
}

const tribes = [
    {
        name: "InternStellar",
        department: "Other engineering"
    },
    {
        name: "Billing",
        department: "Engineering"
    },
    {
        name: "Gears",
        department: "Some department"
    }
]

export async function getTribes(){
    return structuredClone(tribes);
}

export async function getTribe(id: number){
    return structuredClone(tribes[id]);
}
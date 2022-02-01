class Priorities {
    public static readonly BAJA: Priorities = new Priorities(0, 'Baja', 'baja-prioridad');
    public static readonly MEDIA: Priorities = new Priorities(1, 'Media', 'media-prioridad');
    public static readonly ALTA: Priorities = new Priorities(2, 'Alta', 'alta-prioridad');

    private id: number;
    private nombre: string;
    private extraClass: string;

    private constructor(id: number, nombre: string, extraClass: string) {
        this.id = id;
        this.nombre = nombre;
        this.extraClass = extraClass;
    }
    
    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getExtraClass(): string {
        return this.extraClass;
    }

    public static getByID(id: number): Priorities {
        let result: Priorities = Priorities.BAJA;
        switch(id) {
            case Priorities.MEDIA.getId():
                result = Priorities.MEDIA;
                break;
            case Priorities.ALTA.getId():
                result = Priorities.ALTA;
                break;
        }
        return result;
    }

    public static compare(priorityOne: Priorities, priorityTwo: Priorities): number {
        return priorityOne.id - priorityTwo.id;
    }
}

export { Priorities };
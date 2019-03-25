import DateTimeFormat = Intl.DateTimeFormat;

export interface IPoolCar {
    name?: string;
    contact?: string;
    from?: string;
    to?: string;
    date?: Date;
    time?: string;
    seats?: number;
    UserId?: string;
}

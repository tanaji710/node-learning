import DateTimeFormat = Intl.DateTimeFormat;

export interface IPoolCar {
    addharNo?: number;
    name?: string;
    contact?: string;
    poolId?: string;
    UserId?: string;
    accepted?: boolean;
    rejected?: boolean;
    pickupPoint?: string;
}

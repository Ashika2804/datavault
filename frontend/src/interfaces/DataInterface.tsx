

export enum DataTypeEnum {
    CREDENTIALS = 0,
    FILE = 1,
    INFO = 2,
    OTHER = 3
}

export interface DataStructInterface {
    dataType: DataTypeEnum;
    name: string;
    fileHash: string;
    decryptKey: string;
    uploadTime: number;
}

export interface DataExtendedInterface {
    id: string;
    dataType: DataTypeEnum;
    name: string;
    fileHash: string;
    // decryptedData?: DecryptedCredentialsDataInterface | string,
    decryptKey: string;
    decryptedStatus: boolean;
    uploadTime: number;
}

export interface DecryptedCredentialsDataInterface {
    [index: string]: string
}

export interface DecryptedFileDataInterface {
    fileUrl: string
}
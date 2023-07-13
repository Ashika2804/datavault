import { DataTypeEnum } from '@/interfaces/DataInterface'
import React from 'react'
import { FaCreditCard } from 'react-icons/fa'

interface CredentialWithFunctionInterface {
    type: DataTypeEnum,
    index: number,
    id: string,
    name: string,
    time: string,
    decryptedStatus: boolean,
    showDecryptedData: (index: number) => void,
    handleDecryptData: (index: number) => void
}
function DataItem({
    type,
    index,
    name,
    time,
    decryptedStatus,
    showDecryptedData,
    handleDecryptData
}: CredentialWithFunctionInterface) {
    return (
        <div className="relative group w-[14rem]">
            <div className="absolute -inset-0 bg-gradient-to-r from-primary via-third to-secondary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className='flex_center flex-col border border-primary rounded-lg py-12 gap-2 glassmorphism-bg bg-primary-bg/90 cursor-pointer'>
                <FaCreditCard className="text-2xl" />
                <h1 className='text-lg'>{name}</h1>
                <h1 className='text-sm'>{time}</h1>
                {decryptedStatus ?
                    <button onClick={() => showDecryptedData(index)} className="btn_primary_1 text-sm px-4 py-2">
                        Show Credentials
                    </button>
                    :
                    <button onClick={() => handleDecryptData(index)} className="btn_primary_2 text-sm px-4 py-2">
                        Decrypt Credentials
                    </button>
                }
            </div>
        </div>
        )
}

export default DataItem
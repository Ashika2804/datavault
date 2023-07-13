import CryptoJS from "crypto-js"
import JSZip from "jszip"

import saveAs from "file-saver"
import { DataTypeEnum } from "@/interfaces/DataInterface"


function generateRandomKey(): string {
    return CryptoJS.lib.WordArray.random(24).toString(CryptoJS.enc.Base64)
}


// For Encrypting & Decrypting file 
export async function advanceEncryptFile(file: Blob): Promise<{ key: string, encryptedFile: Blob }> {
    const fileToEncrypt  = await zipFile(file as File) as Blob
    
    return new Promise((resolve, error) => {
        const reader = new FileReader()
        reader.onload = () => {
            const key = generateRandomKey();
            const _wArray = CryptoJS.lib.WordArray.create(reader.result as any);
            const encryptedFile = CryptoJS.AES.encrypt(_wArray, key).toString();
            // const file = new File([encryptedFile],"newfile.zip");
            resolve({
                key: key,
                encryptedFile: new File([encryptedFile], "encryptedfile")
            })
        }
        reader.readAsArrayBuffer(fileToEncrypt);
    })
}

function convertWordArrayToUint8Array(wordArray: CryptoJS.lib.WordArray) {
    let arrayOfWords = wordArray.hasOwnProperty("words") ? wordArray.words : []
    let length = wordArray.hasOwnProperty("sigBytes") ? wordArray.sigBytes : arrayOfWords.length * 4
    let uInt8Array = new Uint8Array(length), index = 0, word, i
    for (i = 0; i < length; i++) {
        word = arrayOfWords[i]
        uInt8Array[index++] = word >> 24
        uInt8Array[index++] = (word >> 16) & 0xff
        uInt8Array[index++] = (word >> 8) & 0xff
        uInt8Array[index++] = word & 0xff
    }
    return uInt8Array
}


export function decryptFile(data: Blob, key: string): Promise<Blob> {
    return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = () => {
            const decrypted = CryptoJS.AES.decrypt(reader.result as any, key)
            const typedArray = convertWordArrayToUint8Array(decrypted);
            resolve(new Blob([typedArray]));
        }
        reader.readAsText(data)
    })
}


export function zipFile(file: File) {
    const zip = new JSZip()
    zip.file(file.name, file)
    return zip.generateAsync({ type: "blob" })
}

export async function unZipAndGetData(file: File): Promise<string> {
    try {
        const _unziped = await JSZip.loadAsync(file);
        const fileName = Object.keys(_unziped.files)[0]
        const fileData = await _unziped.files[fileName].async('string');
        return fileData
    } catch (error) {
        throw error        
    }
    

    //     Object.keys(zip.files).forEach(function (filename) {
    //         zip.files[filename].async('string').then(function (fileData) {
    //             console.log(fileData) // These are your file contents      
    //         })
    //     })
    // })
}

export function downloadFile(file: File | Blob, fileName: string): boolean {
    try {
        saveAs(file, fileName);
        return true
    } catch (error) {
        return false
    }

}


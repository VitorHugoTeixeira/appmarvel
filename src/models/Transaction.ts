import { Md5 } from 'ts-md5';


export default class Transaction{
    #id: Number;
    #key: String;
    #time: Number;

    constructor(id: Number, key: String, time: Number){
        this.#id = id
        this.#key = key
        this.#time = time
    }

    getTime(){
        return this.#time
    }

    generateURL(transacao:Transaction){
        let url:String = ""
        url = `${process.env.REACT_APP_URL}?ts=${transacao.#time}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${Md5.hashStr(`${process.env.REACT_APP_PUBLIC_KEY}${process.env.REACT_APP_PRIVATE_KEY}${transacao.#time}`)}` 
        return url
    }


}

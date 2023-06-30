import { Md5 } from 'ts-md5';


export default class Transaction {
    #hash: String;
    #key: String;
    #time: String;

    constructor(time: String) {
        this.#hash = Md5.hashStr(`${time}${process.env.REACT_APP_PRIVATE_KEY}${process.env.REACT_APP_PUBLIC_KEY}`)
        this.#key = `${process.env.REACT_APP_PUBLIC_KEY}`
        this.#time = time
    }

    getTime() {
        return this.#time
    }

    generateURL(transacao: Transaction, endpoint: String, limit: number, offset: number) {
        let url: RequestInfo = `${process.env.REACT_APP_URL}` +
            `${endpoint}` +
            `ts=${transacao.#time}&` +
            `apikey=${transacao.#key}&` +
            `limit=${limit}&offset=${offset}&` +
            `hash=${transacao.#hash}`
        return url
    }

    async getCharacterToPage(transacao: Transaction, limit: number, offset: number) {
        let url: RequestInfo = ''
        let objetoHerois: Array<Object> = []

        url = this.generateURL(transacao, '/characters?', limit, offset)

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            }
        })

        const { data, errors } = await response.json()
        if (response.ok) {
            const herois = data
            if (herois) {
                objetoHerois = await [...objetoHerois, herois.results]
            }
            else {
                return Promise.reject(new Error('No herois in that requisition!!'))
            }
        }
        else {
            const error = new Error(errors?.map((e: any) => e.message).join('\n') ?? 'unknown')
            return Promise.reject(error)
        }

        return objetoHerois
        
    }
}

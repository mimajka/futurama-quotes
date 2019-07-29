import {isNullOrUndefined} from "util";

export class Character {

    constructor(private _name: string,
                private _image: string,
                private _quotes: string[]) {}

    get name(): string {
        return this._name;
    }

    get image(): string {
        return this._image;
    }

    get quotes(): string[] {
        return this._quotes;
    }

    static fromRaw(data: any): Character {
        if (isNullOrUndefined(data) || data instanceof Character) {
            return data;
        }

        const quotes = [];
        if (data.length) {
            data.forEach( item => quotes.push(item.quote));
        }

        return new Character(
            data[0].character,
            data[0].image,
            quotes
        );
    }
}

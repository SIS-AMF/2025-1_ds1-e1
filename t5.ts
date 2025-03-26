interface TOperations<T> {
    add(item: T): void;

    remove(item: T);

    getList(): Array<T>;
}


class Product<T> implements TOperations<T> {
    private list: Array<T>;

    public constructor() {
        this.list = [];
    }

    public add(item: T): void {
        this.list.push(item);
    }

    public remove(item: T) {
        this.list.pop()
    }

    public getList(): Array<T> {
        return this.list;
    }
}

class System implements TOperations<Product<any>> {
    products: Array<Product<any>>;

    public constructor() {
        this.products = [];
    }

    public add(item: Product<any>): void {
        this.products.push(item);
    }

    public remove(item: Product<any>) {
        this.products.pop()
    }

    public getList(): Array<Product<any>> {
        return this.products;
    }
}
export default function isEmpty(obj: any): boolean{
    if(obj === null) return true;
    if(obj === '') return true;
    if(obj === undefined) return true;
    return false;
}

export default function isFile(file: File | string | null | undefined): boolean {
    if (file === null || file === undefined || typeof file === 'string') return false;
    return true;
}

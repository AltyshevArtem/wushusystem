export default function isFile(file: File | string | null | undefined): boolean {
    if (file === null || file === undefined) return false;
    return 'File' in window && file instanceof File;
}

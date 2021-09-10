export default function formatFileToBase64(file: File | null | undefined): string {
    if (file === null || file === undefined) return '';

    let result: string | ArrayBuffer | null = '';

    const reader = new FileReader();
    reader.onload = (event) => {
        if (event.target !== null) {
            result = event.target.result;
        } else {
            return '';
        }
    };

    reader.readAsDataURL(file);

    return result;
}

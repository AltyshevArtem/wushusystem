export default function formatDateToString(date: string | number | Date): string {
    return new Date(date).toISOString().slice(0, 10);
}

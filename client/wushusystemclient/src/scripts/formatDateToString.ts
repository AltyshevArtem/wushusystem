export default function formatDateToString(date: string | number | Date | null): string | null {
    if (!date) return null;
    return new Date(date).toISOString().slice(0, 10);
}

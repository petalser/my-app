import { useGetCatFactQuery } from '@/lib/services/catFactAPI';
import { selectActiveData } from '@/lib/features/data/dataSlice';
import { useAppSelector } from '@/lib/hooks';
import { DailyData } from '@/lib/dataGenerator';
import styles from "./CatFact.module.css"

const getMaxLengthFromRatings = (values: DailyData["value"]) => {
    const ratings = Object.values(values)
    const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    return Math.round(40 + (avg / 9) * (140 - 40));
};

export const CatFact = () => {
    const stored = useAppSelector(selectActiveData)
    const maxLength = getMaxLengthFromRatings(stored.value);
    const { data, error, isLoading } = useGetCatFactQuery(maxLength);

    if (isLoading) return <p>Loading cat fact...</p>;
    if (error) return <p>Error loading fact.</p>;
    if (!data) return <p>No fact found.</p>;

    return <p className={styles.text}><strong>CatFact:</strong> {data.fact}</p>
}

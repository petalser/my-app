import styles from './Dropdown.module.css';
import { useAppDispatch } from '@/lib/hooks';
import { HoroscopeSigns, setActive } from '@/lib/features/horoscopeSigns/horoscopeSignsSlice';

export const Dropdown = () => {
    const dispatch = useAppDispatch();

    const capitalize = (word: string) => {
        return word[0].toUpperCase() + word.slice(1);
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSign = event.target.value;
        const capitalizedSign = capitalize(selectedSign);

        if (Object.values(HoroscopeSigns).includes(capitalizedSign as HoroscopeSigns)) {
            dispatch(setActive(capitalizedSign as HoroscopeSigns));
        } else {
            console.error(`Invalid horoscope sign: ${capitalizedSign}`);
        }
    };

    return (
        <div className={styles.wrapper}>
            <label htmlFor="horoscope" className={styles.label}>Choose your sign:</label>

            <select id="horoscope" name="horoscope" onChange={handleSelectChange} className={`${styles.select} glowing tool hoverable`}>

                <option className={styles.option} value="">Select sign</option>

                {Object.values(HoroscopeSigns).map((sign, index) => (
                    <option key={index} className={styles.option} value={sign.toLowerCase()}>
                        {capitalize(sign)}
                    </option>
                ))}
            </select>
        </div>
    );
};

import { useEffect, useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import { selectSign } from '@/lib/features/horoscopeSigns/horoscopeSignsSlice';
import styles from './MainLogo.module.css';

type IconComponentType = React.ComponentType<{ className?: string }>;

export const MainLogo = () => {
    const [IconComponent, setIconComponent] = useState<IconComponentType | null>(null);
    const sign = useAppSelector(selectSign);

    useEffect(() => {
        let isMounted = true;
        const exportName = `Icon${sign}`;

        const importIcon = async () => {
            try {
                const module = await import(`../icons/${exportName}`);
                const NamedExport = module[exportName] as IconComponentType | undefined;

                if (isMounted && NamedExport) {
                    setIconComponent(() => NamedExport);
                } else {
                    console.error(`Named export "${exportName}" not found in module "../icons/${exportName}"`);
                }
            } catch (error) {
                console.error(`Failed to dynamically import "../icons/${exportName}"`, error);
            }
        };

        importIcon();

        return () => {
            isMounted = false;
        };
    }, [sign]);

    if (!IconComponent) return <div>[ERЯOR]</div>;

    return <IconComponent className={`${styles.logo}`} />;
};

import { View } from 'react-native';
import { Icon, Text, useTheme } from '@ui-kitten/components';

type RatingProps = { value: number; size?: 'small' | 'default' };

export const Rating: React.FC<RatingProps> = ({ value, size = 'default' }) => {
    const theme = useTheme();

    let iconSize = 16;
    let textCategory = 'p1';

    if (size === 'small') {
        iconSize = 12;
        textCategory = 'c1';
    }

    const renderRateButtonElement = (rate: number): JSX.Element => {
        const iconColor: string =
            rate <= value ? 'color-warning-400' : 'color-basic-400';

        return (
            <View key={rate}>
                <Icon
                    name="star"
                    style={{
                        width: iconSize,
                        height: iconSize,
                        tintColor: theme[iconColor],
                    }}
                />
            </View>
        );
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text category={textCategory} style={{ marginRight: iconSize / 2 }}>
                {value}
            </Text>
            {[1, 2, 3, 4, 5].map(renderRateButtonElement)}
        </View>
    );
};

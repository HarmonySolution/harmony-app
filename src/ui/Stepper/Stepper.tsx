import { View } from 'react-native';
import { useTheme, Icon, Text } from '@ui-kitten/components';

type Order = { order: number; title: string; color?: string };

type StepperProps = {
    steps: Order[];
    currentStep: number;
    isFinishedSteps?: boolean;
    outlineSteps?: boolean;
};

export const Stepper: React.FC<StepperProps> = ({
    steps,
    currentStep = 1,
    isFinishedSteps = false,
    outlineSteps = false,
}) => {
    currentStep = isFinishedSteps ? Infinity : currentStep;
    const theme = useTheme();

    const renderStep = (
        { order, title, color = theme['color-primary-500'] }: Order,
        isLast: boolean
    ) => {
        const checked = currentStep > order;
        const highlight = checked || currentStep === order;
        return (
            <View key={order} style={{ width: 84 }}>
                <View style={{ height: 32 }}>
                    <View
                        style={[
                            {
                                width: 24,
                                height: 24,
                                borderRadius: 12,
                                backgroundColor: color,
                                justifyContent: 'center',
                                alignItems: 'center',
                            },
                            outlineSteps
                                ? {
                                      backgroundColor: 'transparent',
                                      borderWidth: 1,
                                      borderColor: color,
                                  }
                                : {},
                        ]}
                    >
                        {checked ? (
                            <Icon name="checkmark-outline" />
                        ) : (
                            <Text
                                style={{ color: theme['text-alternate-color'] }}
                            >
                                {order}
                            </Text>
                        )}
                    </View>
                    {!isLast && (
                        <View
                            style={{
                                height: 1,
                                backgroundColor: checked
                                    ? color
                                    : theme['color-basic-500'],
                                width: 30,
                                marginTop: -13,
                                marginLeft: 39,
                            }}
                        />
                    )}
                </View>
                <Text
                    style={{
                        color: highlight ? color : theme['color-basic-500'],
                    }}
                >
                    {title}
                </Text>
            </View>
        );
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            {steps.map((s, i) => renderStep(s, i + 1 === steps.length))}
        </View>
    );
};

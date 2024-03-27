import { createBox, createText } from "@shopify/restyle";
import { MaterialIcons } from "@expo/vector-icons"

import { ThemeProps } from "./../theme";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

type Props = {
    title: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export function Item({ title, icon }: Props) {
    return (
        <Box flexDirection="row" alignItems="center" gap="s">
            <MaterialIcons name={icon} size={24} />
            <Text variant="body">
                {title}
            </Text>
        </Box>
    )
}
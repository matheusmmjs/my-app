import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "./../theme";
import { Item } from "../components/Item";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export function Home() {
    return (
        <Box 
        flex={1} 
        bg="primary_800" 
        justifyContent="center" 
        alignItems="center"
        p="m"
        >
            <Box width="100%" bg="white" borderRadius={5} p="m">
                <Text variant="title">
                    Plano Trimestral
                </Text>

                <Item icon="timer" title="Entrega em 72h" />
            </Box>
        </Box>
    )
}
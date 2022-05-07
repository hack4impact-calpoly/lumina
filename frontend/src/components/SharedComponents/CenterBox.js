import { Box, Center, useStyleConfig } from '@chakra-ui/react'

// Box that keeps its children at the center of the screen, limited to 95% of screen on mobile or 900px on desktop

export function CenterBox(props) {
    const { variant, children, ...rest } = props

    const styles = useStyleConfig('CenterBox', { variant })

    // Pass the computed styles into the `__css` prop
    return (
        <Center>
            <Box __css={styles} {...rest}>
                {props.children}
            </Box>
        </Center>
    )
}

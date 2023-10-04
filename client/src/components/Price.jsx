import { forwardRef } from "react";
import { Box, Typography } from "@mui/material";

export const Price = forwardRef((props, ref) => {
    const {
        value,
        ...otherProps
    } = props;

    const whole = Math.floor(value);
    const fraction = (value % 1).toFixed(2).substring(2);

    return (
        <Box component="span" display="inline-flex" columnGap={0.3} {...otherProps} ref={ref}>
            <Typography component="span">&euro;</Typography>
            <Typography component="span" variant="h4" lineHeight="1.1">{whole}</Typography>
            <Typography component="span">{fraction}</Typography>
        </Box>
    );
});

Price.displayName = "Price";

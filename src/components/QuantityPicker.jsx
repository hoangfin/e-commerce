import { forwardRef, useImperativeHandle, useRef } from "react";
import { Button, ButtonGroup, useControlled } from "@mui/material";

export const QuantityPicker = forwardRef((props, ref) => {
    const {
        borderRadius = 3,
        max,
        min = 1,
        onChange,
        orientation = "horizontal",
        value: valueProp,
        variant = "contained",
        ...otherProps
    } = props;

    const buttonGroupRef = useRef(null);

    const [value, setValue] = useControlled({
        controlled: valueProp,
        default: 1,
        name: "QuantityPicker"
    });

    useImperativeHandle(ref, () => {
        buttonGroupRef.current.value = value;
        return buttonGroupRef.current;
    }, [value]);

    const handleQuantityChange = e => {
        const newQuantity = e.currentTarget.name === "decrementer" ? (value - 1) : (value + 1);

        // Do nothing if new quantity < min or > max value
        if (newQuantity < min || (max !== undefined && newQuantity > max)) return;

        setValue(newQuantity);

        if (typeof onChange === "function") {
            onChange(e, newQuantity);
        }
    };

    return (
        <ButtonGroup
            ref={buttonGroupRef}
            component="span"
            variant={variant}
            orientation={orientation}
            sx={{ borderRadius }}
            {...otherProps}
        >
            <Button
                name="decrementer"
                onClick={handleQuantityChange}
                sx={theme => ({
                    borderRadius
                })}
            >
                -
            </Button>

            <Button
                component="span"
                disableRipple
                sx={theme => ({
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    ...(orientation === "horizontal" && {
                        width: 60,
                        marginLeft: "-1px",
                        borderRightColor: "transparent"
                    }),
                    ...(orientation === "vertical" && {
                        // height: 60,
                        marginTop: "-1px",
                        borderBottomColor: "transparent"
                    }),
                    borderRadius: 0,
                    "&:hover": { cursor: "default" }
                })}
            >
                {value}
            </Button>

            <Button
                name="incrementer"
                onClick={handleQuantityChange}
                sx={{ borderRadius }}
            >
                +
            </Button>
        </ButtonGroup>
    );
});

QuantityPicker.displayName = "QuantityPicker";

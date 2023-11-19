import { Box, Button, Container, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, SvgIcon, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { QuantityPicker } from "@src/components";
import { useCart, shallow } from "@src/stores";

export const Component = () => {
    const [cart, updateQuantity, removeProduct] = useCart(state => [state.cart, state.updateQuantity, state.removeProduct], shallow);

    console.log("Cart renders");

    return (
        <Container>
            {cart.length > 0 &&
                <>
                    <List>
                        {cart.map(product =>
                            <ListItem
                                key={product.id}
                                divider
                                disableGutters
                                sx={{ height: 170, alignItems: "normal" , columnGap: 3 }}
                            >
                                <Stack alignItems="center" rowGap={2}>
                                    <Box component="img" width={100} src={product.imageURLs[0]} sx={{ objectFit: "contain" }} />
                                    <QuantityPicker
                                        value={product.quantity}
                                        onChange={(_, quantity) => updateQuantity(product.id, quantity)}
                                    />
                                </Stack>
                                <div>
                                    <Typography
                                        display="-webkit-box"
                                        overflow="hidden"
                                        whiteSpace="normal"
                                        role="link"
                                        onClick={e => {
                                            e.preventDefault();
                                            props.onClose();
                                            navigate(`/product/${product.id}`);
                                        }}
                                        sx={{
                                            WebkitBoxOrient: "vertical",
                                            WebkitLineClamp: 4,
                                            cursor: "pointer"
                                        }}
                                    >
                                        {product.title}
                                    </Typography>
                                    <IconButton size="large" onClick={() => removeProduct(product.id)}>
                                        <SvgIcon component={MdDeleteOutline} inheritViewBox />
                                    </IconButton>
                                </div>
                            </ListItem>
                        )}
                    </List>
                    <Button variant="contained" fullWidth component={Link} to="/checkout">Proceed to buy</Button>
                </>
            }
        </Container>
    );
};

Component.displayName = "Cart";

import { Fragment, useRef } from "react";
import { Box, Button, Container, List, ListItemText, Rating, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import { useProduct } from "@src/api";
import { Carousel, QuantityPicker } from "@src/components";
import { useCart } from "@src/stores";

export const Component = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
    const { id } = useParams();
    const { data: product, isLoading, isFetching } = useProduct(id);
    const quantityPickerRef = useRef(null);
    const addProduct = useCart(state => state.addProduct);
    console.log(product);

    if (isLoading) return "Loading...";

    return (
        <Container>
            <Stack paddingBottom={2} rowGap={3}>
                <Carousel height={200} slides={product.imageURLs} />

                <div>
                    <Typography component="div" variant="h6">{product.title}</Typography>
                    <Typography display="flex" alignItems="center" columnGap={1} color="text.secondary">
                        <Rating
                            size="small"
                            defaultValue={product.rating}
                            precision={0.5}
                            readOnly
                            sx={{ "& .MuiSvgIcon-root": { color: "#faaf00" } }}
                        />
                        {product.rating}
                    </Typography>
                </div>

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography component="span" variant="h5">
                        &euro;{(product.price / 100).toFixed(2)}
                    </Typography>
                    <QuantityPicker key={id} ref={quantityPickerRef} min={1} disableElevation />
                </Stack>


                <section>
                    <Typography component="header" fontWeight="fontWeightBold" mb={0.8}>Description</Typography>
                    <Box display="grid" gridTemplateColumns="1fr 1fr">
                        {product.specification.map(spe => {
                            const [title, value] = spe.split(":");
                            return (
                                <Fragment key={title}>
                                    <Typography component="span" /* color="text.secondary" */>{title}</Typography>
                                    <Typography component="span">{value}</Typography>
                                </Fragment>
                            );
                        })}
                    </Box>
                </section>

                {isLargeScreen &&
                    <List>
                        {product.about.map(a =>
                            <ListItemText key={a} primary={a} />
                        )}
                    </List>
                }

                <Button
                    variant="contained"
                    onClick={() => addProduct(product, parseInt(quantityPickerRef.current.value))}
                    sx={{ borderRadius: 2 }}
                >
                    Add to cart
                </Button>
            </Stack>
        </Container>
    );
};

Component.displayName = "Product";
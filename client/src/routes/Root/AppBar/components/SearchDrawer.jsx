import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import {
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    List,
    ListItem,
    Pagination,
    Rating,
    Stack,
    SvgIcon,
    TextField,
    Typography
} from "@mui/material";
import { usePo } from "@src/api/usePo";
import { debounce } from "@src/utils";

export const SearchDrawer = (props) => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(0);
    const prevQuery = useRef(query);
    const { data, isLoading, isFetching } = usePo({ query, page });
    const navigate = useNavigate();

    console.log(data);

    if (prevQuery.current !== query) {
        setPage(query ? 1 : 0);
        prevQuery.current = query;
    }

    const handleKeyUp = useCallback(
        debounce(e => setQuery(e.target.value)),
        []
    );

    return (
        <Drawer {...props}>
            <Box
                component="header"
                position="sticky"
                zIndex={99}
                top={0}
                left={0}
                paddingY={1}
                bgcolor="background.paper"
                borderBottom="1px solid"
                borderColor="divider"
            >
                <Container>
                    <Stack direction="row" alignItems="center">
                        <form style={{ width: "100%" }}>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Search..."
                                defaultValue={query}
                                InputProps={{
                                    startAdornment: (
                                        <SvgIcon
                                            component={IoIosSearch}
                                            inheritViewBox
                                            fontSize="large"
                                            pointerEvents="none"
                                            sx={{ paddingRight: "20px" }}
                                        />
                                    )
                                }}
                                sx={{
                                    "& .MuiInputBase-input": { fontSize: "large" },
                                    "& fieldset": { border: "none" }
                                }}
                                onKeyUp={handleKeyUp}
                            />
                        </form>
                        <Button onClick={props.onClose}>clear</Button>
                    </Stack>
                </Container>
            </Box>

            <Container sx={{ paddingBottom: 2 }}>
                {data?.products?.length > 0 &&
                    <>
                        <List>
                            {data.products.map(product =>
                                <ListItem
                                    key={product.id}
                                    divider
                                    disableGutters
                                    sx={{ height: 170 , alignItems: "normal", columnGap: 2 }}
                                >
                                    <Box position="relative" flex="0 0 150px" role="link">
                                        <Box
                                            component="img"
                                            src={product.imageURLs[0]}
                                            width={1}
                                            height={1}
                                            loading="lazy"
                                            onClick={e => {
                                                e.preventDefault();
                                                props.onClose();
                                                navigate(`/product/${product.id}`);
                                            }}
                                            sx={{ objectFit: "contain" }}
                                        />
                                        <IconButton size="small" sx={{ position: "absolute", top: 2, right: 2 }}>
                                            <SvgIcon component={MdOutlineFavoriteBorder} inheritViewBox />
                                        </IconButton>
                                    </Box>
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

                                        <Rating
                                            size="small"
                                            defaultValue={product.rating}
                                            readOnly
                                            sx={{ "& .MuiSvgIcon-root": { color: "#faaf00" } }}
                                        />

                                        <Typography component="p" variant="h6">
                                            &euro;{(product.price / 100).toFixed(2)}
                                        </Typography>
                                    </div>
                                </ListItem>
                            )}
                        </List>

                        <Pagination
                            variant="outlined"
                            count={Math.ceil(data.found / 12)}
                            page={page}
                            onChange={(event, selectedPage) => setPage(selectedPage)}
                            sx={{ "& .MuiPagination-ul": { justifyContent: "center" } }}
                        />
                    </>
                }

            </Container>

        </Drawer>
    );
};

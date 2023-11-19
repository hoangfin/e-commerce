import { forwardRef, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { SlHandbag } from "react-icons/sl";
import { Logo, PersonOutline } from "@src/icons";
import {
    AppBar as MuiAppBar,
    Avatar,
    Badge,
    Container,
    Divider,
    IconButton, Link, ListItemAvatar, ListItemText,
    Menu,
    MenuItem, Stack,
    SvgIcon,
    Button,
    Dialog,
    Autocomplete,
    InputAdornment,
    TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// import { useUser } from "@src/api/authentication";
// import { SearchDrawer } from "./SearchDrawer";
import { quantity } from "@src/stores/cart";

/** @type {React.ForwardRefRenderFunction<?, import("@mui/material").AppBarProps>} */
export const AppBar = forwardRef(function AppBar(props, ref) {
    const [isOpen, setIsOpen] = useState(false);
    // const [anchorEL, setAnchorEL] = useState(null);
    // const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
    // const user = useUser();
    // const cart = useCart(state => state.cart);
    // const navigate = useNavigate();
    // const { mutate: signOut, isLoading: isSigningOut } = useSignOut();
    // const open = Boolean(anchorEL);
    // const showUserMenu = event => setAnchorEL(event.currentTarget);
    // const hideUserMenu = () => setAnchorEL(null);

    // const handleSignOut = () => {
    //     signOut(null, {
    //         onSuccess: () => navigate("/")
    //     });
    // };
    console.log("Render AppBar");

    return (
        <MuiAppBar {...props} ref={ref}>
            <Container>
                <Stack direction="row" alignItems="center" columnGap={2}>
                    {/* <Stack direction="row" alignItems="center"> */}
                        {/* <IconButton>
                            <SvgIcon component={HiOutlineMenu} inheritViewBox />
                        </IconButton> */}
                        <Link component={RouterLink} to="/">
                            <Logo sx={{ width: "auto", height: "36px" }} />
                        </Link>

                        <IconButton onClick={() => setIsOpen(value => !value)}>
                            <SvgIcon component={RiSearchLine} inheritViewBox />
                        </IconButton>
                        <IconButton
                            // {...(user.data
                            //     ?   { onClick: showUserMenu, "aria-haspopup": true }
                            //     :   { component: RouterLink, to: "/signin", disableRipple: true }
                            // )}
                        >
                            <PersonOutline />
                        </IconButton>
                        <IconButton component={RouterLink} to="/cart">
                            <Badge badgeContent={quantity} color="warning" showZero>
                                <SvgIcon component={SlHandbag} inheritViewBox />
                            </Badge>
                        </IconButton>
                        {/* <Stack direction="row" alignItems="center" marginLeft="auto">
                            <IconButton onClick={() => setIsSearchDrawerOpen(true)}>
                                <SvgIcon component={IoIosSearch} inheritViewBox />
                            </IconButton>

                            <IconButton
                                {...(user.data
                                    ?   { onClick: showUserMenu, "aria-haspopup": true }
                                    :   { component: RouterLink, to: "/signin", disableRipple: true }
                                )}
                            >
                                <PersonOutline />
                            </IconButton>


                        </Stack> */}
                    {/* </Stack> */}
                    {/* <SearchDrawer /> */}
                </Stack>
            </Container>
            {/* <SearchDrawer
                open={isSearchDrawerOpen}
                onClose={() => setIsSearchDrawerOpen(false)}
                sx={{
                    "& .MuiDrawer-paper": { width: "100%" }
                }}
            /> */}

            {/* {user.data?.email &&
                <Menu anchorEl={anchorEL} open={open} onClose={hideUserMenu}>
                    <MenuItem>
                            <ListItemAvatar><Avatar alt="H">A</Avatar></ListItemAvatar>
                            <ListItemText primary={user.data.email} />
                    </MenuItem>

                    <Divider />

                    <MenuItem>
                        <Link component={RouterLink} to="/watchlist" underline="none">Watchlist</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link component={RouterLink} to="/order-history" underline="none">Your orders</Link>
                    </MenuItem>

                    <Divider />

                    <MenuItem>
                        <LoadingButton
                            onClick={handleSignOut}
                            disableRipple
                            sx={{ minWidth: "fit-content", padding: 0, textTransform: "none", fontSize: "inherit" }}
                        >
                            Sign out
                        </LoadingButton>
                    </MenuItem>
                </Menu>
            } */}
            <Dialog fullScreen open={isOpen}>
                <Autocomplete
                    options={["Hello", "Ok to be true", "Swallowed Star"]}
                    freeSolo
                    fullWidth
                    getOptionLabel={option => option}
                    renderInput={params =>
                        <TextField
                            {...params}
                            size="small"
                            placeholder="Search..."
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: <InputAdornment position="start">
                                                    <SvgIcon component={RiSearchLine} inheritViewBox />
                                                </InputAdornment>
                            }}
                        />
                    }
                />
                <Button onClick={() => setIsOpen(false)}>Escape</Button>
            </Dialog>
        </MuiAppBar>
    );
});

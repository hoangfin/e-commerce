import { forwardRef, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
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
    Autocomplete,
    TextField
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// import { useSignOut, useUser } from "@src/api/authentication";
import { Logo, PersonOutline } from "@src/icons";
// import { SearchDrawer } from "./SearchDrawer";
// import { useCart } from "@src/stores";

/** @type {React.ForwardRefRenderFunction<?, import("@mui/material").AppBarProps>} */
export const AppBar = forwardRef((props, ref) => {
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

    return (
        <MuiAppBar {...props} ref={ref}>
            <Container>
                <Stack direction="row" alignItems="center" height="100%" paddingY="12px">
                    {/* <Stack direction="row" alignItems="center"> */}
                        {/* <IconButton>
                            <SvgIcon component={HiOutlineMenu} inheritViewBox />
                        </IconButton> */}
                        <Link component={RouterLink} to="/">
                            <Logo sx={{ width: "auto", height: "36px" }} />
                        </Link>
                        <Autocomplete
                            options={["Hello", "Ok to be true", "Swallowed Star"]}
                            freeSolo
                            fullWidth
                            getOptionLabel={option => option}
                            renderInput={params => <TextField {...params} label="Search" />}
                        />
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

                            <IconButton component={RouterLink} to="/cart">
                                <Badge
                                    badgeContent={cart.reduce((acc, cartItem) => (acc + cartItem.quantity), 0)}
                                    color="warning"
                                >
                                    <SvgIcon component={SlHandbag} inheritViewBox />
                                </Badge>
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
        </MuiAppBar>
    );
});

AppBar.displayName = "AppBar";

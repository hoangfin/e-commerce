import { Outlet, Link as RouterLink } from "react-router-dom";
import { AppBar, Autocomplete, Badge, Button, Container, Dialog, IconButton, InputAdornment, Link, Paper, Stack, SvgIcon, TextField } from "@mui/material";
import { Logo } from "@src/icons";

export default function Root() {

    return (
        <Paper square elevation={0}>
            <AppBar
                position="sticky"
                color="transparent"
                elevation={0}
                sx={theme => ({
                    paddingY: 1,
                    borderBottom: `1px solid ${theme.palette.divider}`
                })}
            >
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
                    </Stack>
                </Container>
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
            </AppBar>
            <Outlet />
        </Paper>
    );

}

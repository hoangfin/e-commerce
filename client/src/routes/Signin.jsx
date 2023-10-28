import { useEffect, useRef } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Chip, Divider, IconButton, Link, Stack, SvgIcon, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Logo } from "@src/icons";
import { useSignIn, useUser } from "@src/api/authentication";

export const Component = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const user = useUser();
    const { mutate: signIn, isLoading: isSigningIn } = useSignIn();
    const navigate = useNavigate();

    const handleSignIn = event => {
        event.preventDefault();
        signIn(
            { email: emailRef.current.value, password: passwordRef.current.value },
            { onSuccess: () => navigate("/") }
        );
    };

    useEffect(() => {
        if (user.data) navigate("/");
    }, [user.data, navigate]);

    if (user.data) return null;

    return (
        <Box width="300px" marginX="auto" paddingTop="32px">
            <Stack useFlexGap rowGap={3}>
                <Link component={RouterLink} to="/" sx={{ alignSelf: "center" }}>
                    <Logo sx={{ width: "auto", height: "36px" }} />
                </Link>
                <Typography textAlign="center">Hello Again!</Typography>
                <Typography textAlign="center">Welcome back you've been missed!</Typography>
                <form onSubmit={handleSignIn}>
                    <Stack useFlexGap rowGap={2}>
                        <TextField inputRef={emailRef} type="email" label="Email" size="small" required />
                        <TextField inputRef={passwordRef} type="password" label="Password" size="small" required />
                        <LoadingButton
                            type="submit"
                            loading={isSigningIn}
                            // loadingPosition="start"
                            variant="contained"
                        >
                            Sign In
                        </LoadingButton>
                    </Stack>
                </form>
                <Divider>
                    <Chip label="or continue with" />
                </Divider>
                <Stack direction="row" justifyContent="center">
                    <IconButton>
                        <SvgIcon component={FcGoogle} inheritViewBox />
                    </IconButton>
                    <IconButton color="#00acee">
                        <SvgIcon component={AiFillTwitterCircle} inheritViewBox />
                    </IconButton>
                    <IconButton color="#3b5998">
                        <SvgIcon component={BsFacebook} inheritViewBox />
                    </IconButton>
                </Stack>
                <Typography textAlign="center">
                    Not a member? <Link component={RouterLink} to="/signup" underline="none">Register now</Link>
                </Typography>
            </Stack>
        </Box>

    );
};

Component.displayName = "Signin";
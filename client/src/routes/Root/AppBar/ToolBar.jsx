import { Link as RouterLink } from "react-router-dom";
import { Stack, IconButton, SvgIcon, Badge } from "@mui/material";
import { PersonOutline } from "@src/icons";
import { RiSearchLine } from "react-icons/ri";
import { SlHandbag } from "react-icons/sl";
import { useCart } from "@src/stores/hooks/useCart";

export function ToolBar(props) {
	const cart = useCart(state => state.cart);
	const quantity = cart.reduce((acc, item) => (acc + item.quantity), 0);

	return (
		<Stack direction="row" alignItems="center" columnGap={1}>
			<IconButton>
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
		</Stack>
	);
};

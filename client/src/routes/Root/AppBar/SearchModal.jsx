import { Autocomplete, Button, Dialog, InputAdornment, Stack, SvgIcon, TextField } from "@mui/material";
import { RiSearchLine } from "react-icons/ri";

export function SearchModal() {
	return (
		<Dialog
			open={true}
			fullScreen
			sx={{
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				width: {
					md: "70vw", // theme.breakpoints.up('md')
				}
			}}
		>
			<Stack
				direction="row"
				alignItems="center"
				paddingY={1}
				borderBottom="1px solid grey"
			>
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
							sx={{
								"& fieldset": { border: "none" }
							}}
						/>
					}
				/>
				<Button disableRipple>Escape</Button>
			</Stack>
		</Dialog>
	);
}

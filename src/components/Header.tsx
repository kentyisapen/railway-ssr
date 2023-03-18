import { Toolbar, Typography } from "@mui/material";

export default function Header() {
	return (
		<Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
			<Typography
				component="h2"
				variant="h5"
				color="inherit"
				align="center"
				noWrap
				sx={{ flex: 1 }}
			>
				My Profile
			</Typography>
		</Toolbar>
	);
}

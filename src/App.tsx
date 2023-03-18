import "./App.css";
import { Container } from "@mui/system";
import Header from "./components/Header";
import Main from "./components/Main";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import post from "./md/blog.md";
import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";

const posts = [post];
const sidebar = {
	title: "About",
	description:
		"テストてすとtestテストてすとtestテストてすとtestテストてすとtestテストてすとtestテストてすとtestテストてすとtestテストてすとtestテストてすとtest",
	archives: [
		{ title: "March 2020", url: "#" },
		{ title: "February 2020", url: "#" },
		{ title: "January 2020", url: "#" },
		{ title: "November 1999", url: "#" },
		{ title: "October 1999", url: "#" },
		{ title: "September 1999", url: "#" },
		{ title: "August 1999", url: "#" },
		{ title: "July 1999", url: "#" },
		{ title: "June 1999", url: "#" },
		{ title: "May 1999", url: "#" },
		{ title: "April 1999", url: "#" },
	],
	social: [
		{ name: "GitHub", icon: GitHubIcon },
		{ name: "Twitter", icon: TwitterIcon },
		{ name: "Facebook", icon: FacebookIcon },
	],
};

function App() {
	return (
		<div className="App">
			<Container maxWidth="lg">
				<Header />
				<main>
					<Grid container spacing={5} sx={{ mt: 3 }}>
						<Main title="自己紹介" posts={posts}></Main>
						<Sidebar
							title={sidebar.title}
							description={sidebar.description}
							archives={sidebar.archives}
							social={sidebar.social}
						/>
					</Grid>
				</main>
			</Container>
		</div>
	);
}

export default App;

// src/lib/github.js
export async function getGitHubContributions(username) {
	const response = await fetch(
		`https://api.github.com/users/SurendharSSenthil/events/public`
	);
	const data = await response.json();
	return data;
}

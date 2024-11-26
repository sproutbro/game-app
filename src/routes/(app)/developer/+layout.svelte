<script>
	const navLinks = [
		{ href: '/developer/profile', label: 'Profile' },
		{ href: '/developer/diary', label: 'Diary' }
	];
</script>

<header>
	<nav>
		{#each navLinks as { href, label }}
			<a {href}>{label}</a>
		{/each}
	</nav>
</header>
<main>
	<slot />
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #444; /* 첫 번째 레이아웃보다 조금 더 밝은 색상 */
		color: #fff;
	}

	nav {
		display: flex;
		gap: 1rem;
	}

	nav a {
		text-decoration: none;
		color: #fff;
		font-weight: bold;
		transition: color 0.3s ease;
	}

	nav a:hover {
		color: #ffa726; /* 강조 색상 */
	}

	.logout-btn {
		color: #ff5722;
	}
</style>

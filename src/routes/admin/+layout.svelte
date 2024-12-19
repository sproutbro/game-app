<script>
	const navLinks = [
		{ href: '/admin/diary/write', label: 'Write diary' },
		{ href: '/developer/profile', label: 'Developer' },
		{ href: '/community', label: 'Community' }
	];
</script>

<header>
	<nav>
		{#each navLinks as { href, label }}
			<div>
				<a {href}>{label}</a>
			</div>
		{/each}
	</nav>
</header>

<main>
	<slot />
</main>

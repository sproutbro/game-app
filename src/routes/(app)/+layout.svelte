<script>
	import '../../app.css';

	/** @type {import('./$types').PageData} */
	export let data;

	let isMenuOpen = false;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/developer/profile', label: 'Developer' },
		{ href: '/community', label: 'Community' }
	];
</script>

<header>
	<h1>My Website</h1>
	<button class="menu-button" on:click={toggleMenu}> &#9776; </button>
	<nav>
		{#each navLinks as { href, label }}
			<a {href}>{label}</a>
		{/each}
		{#if data.isLogin}
			<a href="/user/profile" class="login-btn">User</a>
		{:else}
			<a href="/auth/login" class="login-btn">Login</a>
		{/if}
	</nav>
	<div class="mobile-menu {isMenuOpen ? 'open' : ''}">
		{#each navLinks as { href, label }}
			<a {href} on:click={() => (isMenuOpen = false)}>{label}</a>
		{/each}
		{#if data.isLogin}
			<a href="/user/profile" class="login-btn" on:click={() => (isMenuOpen = false)}>User</a>
		{:else}
			<a href="/auth/login" class="login-btn" on:click={() => (isMenuOpen = false)}>Login</a>
		{/if}
	</div>
</header>

<main>
	<slot />
</main>

<footer>
	<div class="container">© 2024 My Website. All rights reserved.</div>
</footer>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #333;
		color: #fff;
		position: relative;
	}

	h1 {
		font-size: 1.5rem;
	}

	.menu-button {
		display: none;
		background: none;
		border: none;
		font-size: 1.5rem;
		color: #fff;
		cursor: pointer;
	}

	nav {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	nav a {
		text-decoration: none;
		color: #fff;
		font-weight: bold;
	}

	nav a:hover {
		text-decoration: underline;
	}

	.login-btn {
		padding: 0.5rem 1rem;
		background-color: #ff5722; /* 로그인 버튼 색상 */
		color: #fff;
		border-radius: 5px;
		text-decoration: none;
		font-weight: bold;
		transition: background-color 0.3s ease;
	}

	.login-btn:hover {
		background-color: #e64a19; /* 호버 시 더 진한 색 */
	}

	.mobile-menu {
		display: none;
		flex-direction: column;
		gap: 1rem;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background-color: #333;
		padding: 1rem;
	}

	/* 모바일 스타일 */
	@media (max-width: 768px) {
		.menu-button {
			display: block; /* 햄버거 버튼 활성화 */
		}

		nav {
			display: none; /* 기본 네비게이션 숨김 */
		}

		.mobile-menu.open {
			display: flex;
		}
	}
</style>

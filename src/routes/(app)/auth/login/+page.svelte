<div class="login-container">
	<h2>Login</h2>
	<div class="login-buttons">
		<button class="login-btn google">구글로 로그인</button>
		<a href="/auth/login/kakao">
			<button class="login-btn kakao">카카오로 로그인</button>
		</a>
		<button class="login-btn naver">네이버로 로그인</button>
	</div>
</div>

<style>
	.login-container {
		background-color: #ffffff;
		border-radius: 10px;
		padding: 30px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		text-align: center;
		width: 300px;
		margin: 100px auto;
	}

	h2 {
		margin-bottom: 20px;
		color: #333;
	}

	.login-buttons {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.login-btn {
		width: 100%;
		padding: 12px;
		font-size: 16px;
		border: none;
		border-radius: 5px;
		color: white;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.google {
		background-color: #4285f4; /* 구글 색상 */
	}

	.kakao {
		background-color: #ffdd00; /* 카카오 색상 */
		color: #3c1e1e;
	}

	.naver {
		background-color: #03c75a; /* 네이버 색상 */
	}

	.login-btn:hover {
		opacity: 0.8;
	}
</style>

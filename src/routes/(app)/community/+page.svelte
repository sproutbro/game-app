<script>
	let posts = [
		{
			id: 1,
			title: '첫 번째 게시물 제목이 너무 길다면 이렇게 보일 것입니다',
			author: '관리자',
			date: '2024-11-20'
		},
		{ id: 2, title: '두 번째 게시물', author: '사용자1', date: '2024-11-19' },
		{ id: 3, title: '세 번째 게시물', author: '사용자2', date: '2024-11-18' },
		{ id: 4, title: '네 번째 게시물', author: '사용자3', date: '2024-11-17' }
	];

	let searchQuery = '';

	function searchPosts() {
		return posts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
	}

	function handleSearch() {
		alert(`검색어: ${searchQuery}`);
	}
</script>

<div class="board-container">
	<h1>Community</h1>

	<div class="board-actions">
		<div class="search-container">
			<input type="text" bind:value={searchQuery} />
			<button class="search-btn" on:click={handleSearch}>Search</button>
		</div>
	</div>

	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>Title</th>
				<th>Writer</th>
				<th>Date</th>
			</tr>
		</thead>
		<tbody>
			{#each searchPosts() as { id, title, author, date }, i}
				<tr>
					<td>{i + 1}</td>
					<td>
						<a href={`/board/${id}`} class="title">{title}</a>
						<div class="mobile-details">
							<span>{author}</span> | <span>{date}</span>
						</div>
					</td>
					<td class="desktop-only">{author}</td>
					<td class="desktop-only">{date}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<div class="pagination">
		<button class="page-btn">＜</button>
		<span>1 / 10</span>
		<button class="page-btn">＞</button>
		<button class="write-btn" on:click={() => alert('글쓰기 페이지로 이동')}>Write</button>
	</div>
</div>

<style>
	.board-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
		font-family: Arial, sans-serif;
	}

	h1 {
		text-align: center;
		margin-bottom: 20px;
		font-size: 1.5rem;
	}

	.board-actions {
		margin-bottom: 20px;
	}

	.search-container {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.search-container input {
		flex: 1;
		padding: 10px;
		font-size: 1rem;
		border: 1px solid #ddd;
		border-radius: 4px;
	}

	.search-container button {
		padding: 10px 15px;
		font-size: 1rem;
		border: none;
		border-radius: 4px;
		background-color: #28a745;
		color: white;
		white-space: nowrap;
		cursor: pointer;
	}

	.search-container button:hover {
		background-color: #218838;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 10px;
		text-align: left;
		border: 1px solid #ddd;
		font-size: 0.9rem;
	}

	th {
		background-color: #f4f4f4;
	}

	tr:nth-child(even) {
		background-color: #f9f9f9;
	}

	td .title {
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 250px; /* 제목의 최대 너비 조절 */
	}

	.mobile-details {
		display: none;
		font-size: 0.8rem;
		color: #555;
		margin-top: 5px;
	}

	.mobile-details span {
		display: inline;
	}

	.pagination {
		display: flex;
		justify-content: space-between; /* 페이지 버튼 왼쪽과 오른쪽 정렬 */
		align-items: center;
		margin-top: 20px;
		width: 100%;
	}

	.page-btn {
		padding: 5px 15px;
		margin: 0 10px;
		font-size: 0.9rem;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.page-btn:hover {
		background-color: #0056b3;
	}

	.write-btn {
		padding: 10px 15px;
		font-size: 1rem;
		border: none;
		border-radius: 4px;
		background-color: #ffc107; /* 글쓰기 버튼 색상 변경 */
		color: white;
		cursor: pointer;
	}

	.write-btn:hover {
		background-color: #e0a800;
	}

	/* 반응형 디자인 */
	@media (max-width: 600px) {
		.search-container {
			flex-wrap: nowrap;
		}

		th:nth-child(3),
		th:nth-child(4),
		td.desktop-only {
			display: none;
		}

		.mobile-details {
			display: block;
		}

		.mobile-details span {
			display: inline-block;
		}

		td {
			font-size: 0.85rem;
		}
	}
</style>

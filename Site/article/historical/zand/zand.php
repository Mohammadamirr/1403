<?php

$article_id = $_GET['id'];

$query = "SELECT title, content FROM articles WHERE id = ?";
$stmt = $pdo->prepare($query);
$stmt->execute([$article_id]);
$article = $stmt->fetch();

$query_comments = "SELECT username, comment_text FROM comments WHERE article_id = ? ORDER BY created_at DESC";
$stmt_comments = $pdo->prepare($query_comments);
$stmt_comments->execute([$article_id]);
$comments = $stmt_comments->fetchAll();
?>
<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title><?php echo htmlspecialchars($article['title']); ?></title>
  <style>
    body { font-family: sans-serif; direction: rtl; }
    article { margin-bottom: 40px; }
    #comments-section { margin-top: 20px; }
    .comment { border-bottom: 1px solid #ccc; padding: 10px 0; }
    .username { font-weight: bold; }
  </style>
</head>
<body>
  <article class="article-content">
    <h1><?php echo htmlspecialchars($article['title']); ?></h1>
    <div class="content">
      <?php echo $article['content']; ?>
    </div>
  </article>

  <section id="comments-section">
    <h2>نظرات</h2>
    <?php if (!empty($comments)) : ?>
      <?php foreach($comments as $comment) : ?>
        <div class="comment">
          <!-- نمایش تنها نام کاربری -->
          <span class="username"><?php echo htmlspecialchars($comment['username']); ?></span>
          <p><?php echo nl2br(htmlspecialchars($comment['comment_text'])); ?></p>
        </div>
      <?php endforeach; ?>
    <?php else: ?>
      <p>هنوز نظری ثبت نشده است.</p>
    <?php endif; ?>
  </section>

  <section id="add-comment">
    <h3>افزودن نظر</h3>
    <form action="submit_comment.php" method="post">
      <input type="hidden" name="article_id" value="<?php echo $article_id; ?>">
      <div>
        <label for="username">نام کاربری:</label>
        <input type="text" name="username" id="username" required>
      </div>
      <div>
        <label for="comment_text">نظر:</label>
        <textarea name="comment_text" id="comment_text" required></textarea>
      </div>
      <button type="submit">ارسال نظر</button>
    </form>
  </section>
</body>
</html>

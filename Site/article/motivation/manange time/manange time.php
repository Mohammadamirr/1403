<?php
// وصل شدن به دیتابیس
$conn = new mysqli("localhost", "root", "", "your_database_name");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// اگر فرم ارسال شده بود
$sql = "SELECT * FROM comments WHERE article_id = 1";
$result = $conn->query($sql);
?>

<div class="comments-container">
    <?php while ($row = $result->fetch_assoc()): ?>
        <div class="comment">
            <p><?php echo htmlspecialchars($row['comment_text']); ?></p>
            <small>Posted by <?php echo htmlspecialchars($row['user_name']); ?></small>
        </div>
    <?php endwhile; ?>
</div>

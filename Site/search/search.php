<?php
    include('../header.php');
    $category = 'تاریخ';
    $articles = [
        ['title' => 'دوران ساسانیان', 'link' => '../article/historical/sassanids/sassanids.html'],
        ['title' => 'دوران هخامنشیان', 'link' => '../article/historical/achaemenids/achaemenids.html'],
        ['title' => 'دوران اشکانیان', 'link' => '../article/historical/parthians/parthians.html'],
        ['title' => 'دوران سلوکیان', 'link' => '../aricle/historical/seleucids/seleucids.html'],
        ['title' => 'دوران جنگ های صلیبی', 'link' => '../article/historical/crusader/crusader.html']
    ];
    $category = 'درسی';
    $articles = [
        ['title' => 'نکات طلایی درس خواندن', 'link' => '../article/study/studing/studing.html']
        ['title' => 'انتخاب رشته پس از پایه نهم: نکات اصلی و راهنمای جامع' => '../article/study/choose field/choose field.html']
    ]
    $category = 'ورزشی'
    $articles = [
        ['title' => 'آشنایی با ورزش کونگ فو', 'link' => '../article/sports/kongfu/kongfu.html'];
        ['title' => 'آشنایی با ورزش موی تای', 'link' => '../article/sports/muythai/muythai.html']
    ]
?>
<main>
    <h1><?php echo $category; ?></h1>
    <ul>
        <?php foreach($articles as $article): ?>
            <li><a href="<?php echo $article['link']; ?>"><?php echo $article['title']; ?></a></li>
        <?php endforeach; ?>
    </ul>
</main>
<?php include('../footer.php'); ?>

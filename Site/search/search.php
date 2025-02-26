<?php
    include('../header.php');
    $category = 'تاریخ';
    $articles = [
        ['title' => 'دوران ساسانیان', 'link' => '../articl/historical/sassanids.html'],
        ['title' => 'دوران هخامنشیان', 'link' => '../articl/historical/achaemenids.html'],
        ['title' => 'دوران اشکانیان', 'link' => '../artical/historical/parthians.html'],
        ['title' => 'دوران سلوکیان', 'link' => '../arical/historical/seleucids.html'],
        ['title' => 'دوران جنگ های صلیبی', 'link' => '../artical/historical/crusader.html']
    ];
    $category = 'درسی';
    $articles = [
        ['title' => 'نکات طلایی درس خواندن', 'link' => '../artical/study/studing.html']
    ]
    $category = 'ورزشی'
    $articles = [
        ['title' => 'آشنایی با ورزش کونگ فو', 'link' => '../artical/sports/kongfu.html'];
        ['title' => 'آشنایی با ورزش موی تای', 'link' => '../artical/sports/muythai.html']
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

<!DOCTYPE HTML>
<html>
    <head>
        <title><?= basename(__DIR__) ?></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="../../assets/css/tab.css" />
        <script src="../../assets/js/tab.js"></script>
    </head>
    <body>
        <header>
            <h1><?= basename(__DIR__) ?></h1>
        </header>
        <div id="tab">
            <?php
                $directory = '../../../1Trimestre';
                $dirs = array_diff(scandir('.'), array('..', '.'));
                foreach ($dirs as $key => $value) {
                    if (is_dir($value)) {
                        echo "<button class=\"tablinks\" id=\"$value\">$value</button>";
                    }
                }
            ?>
        </div>
        <iframe id="iframe" class="tabcontent"></iframe>
    </body>
</html>
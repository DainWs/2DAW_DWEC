<!DOCTYPE HTML>
<html>
    <head>
        <title><?= basename(__DIR__) ?></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="../../../assets/css/tab.css" />
    </head>
    <body>
        <div id="tab">
            <?php
                $directory = '../../../../1Trimestre/Unit-5/Exercises/'.basename(__DIR__);
                $dirs = array_diff(scandir($directory), array('..', '.'));
                foreach ($dirs as $key => $value) {
                    $id = $directory . DIRECTORY_SEPARATOR . $value;
                    if (is_dir($id)) {
                        echo "<button class=\"tablinks\" id=\"$value\">$value</button>";
                    }
                }
            ?>
        </div>
        <iframe id="iframe" class="tabcontent"></iframe>
    </body>
    <script>
        function loadFrame(e) {
            let iframe = document.getElementById('iframe');
            let folder = e.target.id;
            iframe.setAttribute('src', `${window.location.href}../../../../../../1Trimestre/Unit-5/Exercises/<?= basename(__DIR__) ?>/${folder}/index.html`);
        }

        window.onload = () => {
            let tab = document.getElementById('tab');
            let buttons = tab.getElementsByTagName('button');
            for (buttonIndex in buttons) {
                buttons[buttonIndex].onclick = loadFrame;
            }
        };
    </script>
</html>
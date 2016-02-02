<div class="side-nav">
    <ul class="side-nav-ul">
        <? foreach($menu as $item): ?>
            <li class="side-nav-li side-nav-li-ttl"><?=$item['name']; ?></li>
            <? foreach($item['items'] as $subItem): ?>
                <?
                if (!empty($subItem['url'])) {
                    if ($subItem['url'] == '/') {
                        $class = ($requestedPath == '/') ? 'side-nav-li-a-red' : '';
                    } else {
                        $class = (strpos($requestedPath, $subItem['url']) === 0) ? 'side-nav-li-a-red' : '';
                    }
                } else {
                    $class = '';
                }
                ?>
                <li class="side-nav-li"><a href="<?=$subItem['url']; ?>" class="side-nav-li-a <?=$class; ?><? if(isset($subItem['class'])): ?> <?=$subItem['class']; ?><? endif; ?>"><?=$subItem['name']; ?></a></li>
            <? endforeach; ?>
        <? endforeach; ?>
    </ul>
</div>
$(".hamberger").click(function(){
	$(".hamberger-menu").slideToggle();
});

$(".picture-top2").hover(function(){
	$(this).children(".shoes1").stop().fadeToggle();
});

$(".picture-bottom1").hover(function(){
	$(this).children(".shoes2").stop().fadeToggle();
});

$(".picture-bottom3").hover(function(){
	$(this).children(".shoes3").stop().fadeToggle();
});

$("#theTarget").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'fade',
    // 変化に係る時間(ミリ秒)
    speed : 1000,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'block',
    // 子要素の種類("div" or "img")
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : true,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : false,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 5000,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false
});
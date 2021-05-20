531

<br>

<br>

Here is the table of % to hex values:

**Example**: For 85% white, you would use #D9FFFFFF. **Here 85% = "D9" & White = "FFFFFF"**

<pre>100% — FF
95% — F2
90% — E6

85% — D9

80% — CC
75% — BF
70% — B3
65% — A6
60% — 99
55% — 8C
50% — 80
45% — 73
40% — 66
35% — 59
30% — 4D
25% — 40
20% — 33
15% — 26
10% — 1A
5% — 0D
0% — 00
</pre>

**How is it calculated?**

FF is number written in hex mode. That number represent 255 in decimal. For example, if you want 42% to calculate you need to find 42% of numbeer 255 and convert that number to hex. 255 \* 0.42 \~= 107 107 to hex is "6B – maleta

[Share](<https://stackoverflow.com/a/28481374/15486954>)

[Edit](<https://stackoverflow.com/posts/28481374/edit>)

Follow

[edited Apr 17 '20 at 19:51](<https://stackoverflow.com/posts/28481374/revisions>)

<br>

answered Feb 12 '15 at 15:29

[T](<https://stackoverflow.com/users/2765160/shivaraj-patil>)

[Shivaraj Patil](<https://stackoverflow.com/users/2765160/shivaraj-patil>)

**7,696**4

4 gold badges

25

25 silver badges

53

53 bronze badges

- 3
- how do you calculate this? – [Saeed Jassani](<https://stackoverflow.com/users/4451655/saeed-jassani>)[Dec 26 '16 at 15:37](<https://stackoverflow.com/questions/23201134/transparent-argb-hex-value#comment69869293_28481374>)
- 38
- @SaeedJassani FF is number written in hex mode. That number represent 255 in decimal. For example, if you want 42% to calculate you need to find 42% of numbeer 255 and convert that number to hex. 255 \* 0.42 \~= 107 107 to hex is "6B" – [maleta](<https://stackoverflow.com/users/1828301/maleta>)[Dec 27 '16 at 10:32](<https://stackoverflow.com/questions/23201134/transparent-argb-hex-value#comment69888868_28481374>)
- 1
- @Maleta Thanks a lot – [Saeed Jassani](<https://stackoverflow.com/users/4451655/saeed-jassani>)[Dec 27 '16 at 14:01](<https://stackoverflow.com/questions/23201134/transparent-argb-hex-value#comment69894851_28481374>)

<!-- -->

[Add a comment](<https://stackoverflow.com/questions/23201134/transparent-argb-hex-value#>)

<br>

10

<br>

<br>

Adding to the other answers and doing nothing more of what @Maleta explained in a comment on [https://stackoverflow.com/a/28481374/1626594](<https://stackoverflow.com/a/28481374/1626594>), doing **alpha\*255 then round then to hex**. Here's a quick converter [http://jsfiddle.net/8ajxdLap/4/](<http://jsfiddle.net/8ajxdLap/4/>)

<pre>function rgb2hex(rgb) {
  var rgbm = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?((?:[0-9]*[.])?[0-9]+)[\s+]?\)/i);
  if (rgbm &amp;&amp; rgbm.length === 5) {
    return "#" +
      ('0' + Math.round(parseFloat(rgbm[4], 10) * 255).toString(16).toUpperCase()).slice(-2) +
      ("0" + parseInt(rgbm[1], 10).toString(16).toUpperCase()).slice(-2) +
      ("0" + parseInt(rgbm[2], 10).toString(16).toUpperCase()).slice(-2) +
      ("0" + parseInt(rgbm[3], 10).toString(16).toUpperCase()).slice(-2);
  } else {
    var rgbm = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    if (rgbm &amp;&amp; rgbm.length === 4) {
      return "#" +
        ("0" + parseInt(rgbm[1], 10).toString(16).toUpperCase()).slice(-2) +
        ("0" + parseInt(rgbm[2], 10).toString(16).toUpperCase()).slice(-2) +
        ("0" + parseInt(rgbm[3], 10).toString(16).toUpperCase()).slice(-2);
    } else {
      return "cant parse that";
    }
  }
}

$('button').click(function() {
  var hex = rgb2hex($('#in_tb').val());
  $('#in_tb_result').html(hex);
});
body {
  padding: 20px;
}
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;
Convert RGB/RGBA to hex #RRGGBB/#AARRGGBB:&lt;br&gt;
&lt;br&gt;
&lt;input id="in_tb" type="text" value="rgba(200, 90, 34, 0.75)"&gt; &lt;button&gt;Convert&lt;/button&gt;&lt;br&gt;
&lt;br&gt; Result: &lt;span id="in_tb_result"&gt;&lt;/span&gt;
</pre>

